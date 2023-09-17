/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { ref, push, set, get, onValue, remove } from "firebase/database";
import { db } from '../firebase'
import { v4 as uuid } from 'uuid';



export const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const [users, setUsers] = useState({});
    const [sectors, setSectors ] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [updateUser, setUpdateUser] = useState({});

    const UpdateUser = async({id, userId, userName, sectors, isAgree}) => {
        const updatedUser = {id: userId, userName: userName, sectors: sectors, isAgree: isAgree}
        const userRef = ref(db, 'users');
        // let response;
        //Get Data Once and Update
        const response = get(userRef).then((snapshot) => {

            const user = Object.values(snapshot.val()).find((user) => user.userName.toUpperCase() === userName.toUpperCase() && user.id != userId )
            if(user) {
                return { status: 0, message: 'User already exist'}
            }else{
                set(ref(db, `users/${id}`), updatedUser);
                GetUsers();
                return { status: 1, message: 'Update Successful'}
            }
        }).catch((error) => {
            return { status: 0, message: error.message}
        })
        return await response
    }

    const AddUser = async({userName, sectors, isAgree}) => {
        setIsLoading(true)
        //Update data
        const userRef = ref(db, 'users');
        const response = get(userRef).then((snapshot) => {

            const user = Object.values(snapshot.val()).find(user => user.userName.toUpperCase() === userName.toUpperCase())
            if(user) {
                return { status: 0, message: 'User already exist'}
            }else{
                const newUserRef = push(userRef);
                set(newUserRef, {
                    id: uuid(),
                    userName: userName,
                    sectors: sectors,
                    isAgree: isAgree
                });

                GetUsers();
                return { status: 1, message: 'Update Successful'}
            }
        }).catch((error) => {
            return { status: 0, message: error.message}
        })

        return await response

    }

    //Get Users Values
    const GetUsers = () => {
        try {
            // Read data
            const usersRef = ref(db, 'users');
            onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
                if(data) {
                    setUsers(data)
                }
                window.setTimeout(() => {
                    setIsLoading(false)
                }, 1000);

            });
        } catch (error) {
            throw new Error(error)
        }
    }
    //Get Sectors Values
    const GetSectors = () => {
        // set(ref(db, 'users'), userValues);
        // set(ref(db, 'sectors'), sectorValues);
        // const sectorsRef = ref(db, 'sectors')
        // const sectors = push(sectorss);
        const secotorsRef = ref(db, 'sectors');
        onValue(secotorsRef, (snapshot) => {
            const data = snapshot.val();
            setSectors(data);
        });
    }

    const DeleteUser = (id) => {
        const userRef = ref(db, `users/${id}`);
        const user = remove(userRef).then(() => {
            GetUsers();
            return {status: 1, message: 'Delete Successful'}
        }).catch((error) => {
            return { status: 0, message: error.message}
        })

        return user
    }

    useEffect(() => {
        GetSectors();
        GetUsers();
    }, [])

    return (
        <UserContext.Provider
            value={
                {
                    isLoading,
                    setIsLoading,
                    users,
                    sectors,
                    UpdateUser,
                    AddUser,
                    DeleteUser
                }
            }
        >
            {children}
        </UserContext.Provider>
    )
}