/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import { UserContext } from "./context/UserContext"
import { Link, useNavigate, useParams } from "react-router-dom";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import Loading from "./components/Loading";
import AlertModal from "./components/AlertModal";

const schema = yup.object().shape({
    userName: yup.string().required('User name is required'),
    sectors: yup.array().required('Please select one').min(1, 'Please select one'),
    isAgree: yup.bool().oneOf([true], 'You must agree to the terms and conditions'),
})

function Update() {
    const params = useParams();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const {AddUser, users, sectors, UpdateUser} = useContext(UserContext);
    const user = Object.entries(users).find(([id, user]) => user.id === params.id)
    let objValue


    const { register, handleSubmit, setValue,formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        if (user) {
            objValue = Object.values(user);
            setValue('userName', objValue[1].userName)
            setValue('sectors', objValue[1].sectors)
            setValue('isAgree', objValue[1].isAgree)
        }
    }, [user, params.id]);


    const FormSubmitHandler = async(data) => {
        try {
            const response = await AddUser(data);
            if(response.status == 1) {
                navigate('/')
            }else{
                setShowModal(true)
                setErrorMsg(response.message)
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    const SubmitUpdateHandler = async(data) => {
        try {
            const response = await UpdateUser({id: objValue[0], userId: objValue[1].id, userName: data.userName, sectors: data.sectors, isAgree: data.isAgree})

            if(response.status == 1) {
                navigate('/')
            }else{
                setShowModal(true)
                setErrorMsg(response.message)
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    //Option create new array
    const flattenOptions = (sectors) => {
        const flatOptions = [];
        function flatten(data) {
            data.forEach(option => {
                flatOptions.push(option);
                if (option.children) {
                    option.children.forEach(optionSec => {
                        const modifyOptionSec = {
                            ...optionSec,
                            name: `\u00a0\u00a0${optionSec.name}`
                        }
                        flatOptions.push(modifyOptionSec)

                        if (optionSec.children) {
                            optionSec.children.forEach(optionThird => {
                                const modifyOptionThird = {
                                    ...optionThird,
                                    name: `\u00a0\u00a0\u00a0\u00a0${optionThird.name}`
                                }
                                flatOptions.push(modifyOptionThird)
                            });
                        }
                    });
                }
            });
        }

        flatten(sectors);
        return flatOptions;
    }

    if(!sectors) {
        return <Loading />
    }

    if(sectors){
        const options = flattenOptions(sectors)

        return (
            <>
                <div className="w-full md:w-6/12">
                    <form onSubmit={handleSubmit(user ? SubmitUpdateHandler : FormSubmitHandler)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h1 className="text-gray-700 text-[14px] mb-5 font-bold">Please enter your name and pick the Sectors you are currently involved in.</h1>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-[14px] font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="User name"
                                {...register('userName')}
                            />
                            <span className="block text-sm text-pink-500 mt-1">{errors.userName && errors.userName.message}</span>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-[14px] font-bold mb-2" htmlFor="sectors">Sectors</label>
                            <select
                                {...register('sectors')}
                                multiple
                                id="sectors"
                                className="bg-gray-50 h-[180px] overflow-x-auto border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600">
                                {
                                    options.map(option => (
                                        <option key={option.id} value={option.id}>{option.name}</option>
                                    ))
                                }
                            </select>
                            <span className="block text-xs mt-1 text-gray-500">Tip: To select multiple hold &#8220;Ctrl&#8220;.</span>
                            <span className="block text-sm text-pink-500 mt-1">{errors.sectors && errors.sectors.message}</span>
                        </div>
                        <div className="mb-6">
                            <div className="flex items-center">
                                <input
                                    id="checked"
                                    type="checkbox"
                                    {...register('isAgree')}
                                    className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 ${errors.isAgree && `border-pink-400`} `}/>
                                <label htmlFor="checked" className="ml-2 text-gray-700 text-[14px] font-bold">Agree to terms</label>
                            </div>
                            <span className="block text-sm text-pink-500 flex-none">{errors.isAgree && errors.isAgree.message}</span>
                        </div>
                        <div className="flex items-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                save
                            </button>
                            <Link to={'/'}
                                className="ml-3 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Back</Link>
                        </div>
                    </form>
                </div>
                {
                    showModal ? ( <AlertModal errorMsg={errorMsg} setShowModal={setShowModal} />) : null
                }
            </>
        )
    }
}

export default Update