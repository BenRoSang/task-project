/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "../context/UserContext"
import { Link } from "react-router-dom";

function UserTable() {
    const {sectors, DeleteUser, users, setIsLoading} = useContext(UserContext);

    const flattenOptions = (sectors, idArray) => {
        const flatOptions = [];
        function flatten(data, idArray) {
            data.forEach(option => {
                if( idArray.length > 0 && idArray.includes(option.id)) {
                    flatOptions.push(option);
                    idArray.slice(idArray.indexOf(option.id), 1)
                }
                if (option.children) {
                    flatten(option.children, idArray)
                }
            });
        }

        flatten(sectors, idArray);
        return flatOptions;
    }

    const handleDelete = (id) => {
        setIsLoading(true)
        DeleteUser(id);
        window.setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-900 dark:text-gray-700">
                <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                    <th scope="col" className="px-6 py-4">No</th>
                    <th scope="col" className="px-6 py-4">User Name</th>
                    <th scope="col" className="px-6 py-4">Sectors</th>
                    <th scope="col" className="px-6 py-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.entries(users).length <= 0 ? (
                            <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium"></td>
                                <td className="whitespace-nowrap px-6 py-4"></td>
                                <td className="whitespace-nowrap px-6 py-4">Click add button to add users</td>
                                <td className="whitespace-nowrap px-6 py-4"></td>
                            </tr>
                        ) : (
                            Object.entries(users).map(([id, user], i) => {

                                const arrSectors = flattenOptions(sectors, user.sectors)
                                return (
                                    <tr key={id} className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{i + 1}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{user.userName}</td>
                                        <td className="flex flex-wrap gap-[5px] whitespace-nowrap px-6 py-4">
                                            {
                                                arrSectors.length > 0 && arrSectors.map((value, j) => (
                                                    <span key={j} className="p-1 text-[12px] text-gray-200 rounded-md bg-gray-500">
                                                        {value.name}
                                                    </span>
                                                ))
                                            }
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <Link
                                                to={`/update/${user.id}`}
                                                className="py-2 px-4 text-white bg-gray-400 rounded text-sm mr-3"
                                            >Edit</Link>
                                            <button onClick={() => handleDelete(id)} className="py-2 px-4 text-gray-200 bg-pink-400 rounded text-sm">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        )
                    }
                </tbody>
            </table>
        </div>
    )
//     return (

// <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//                 <th scope="col" className="px-6 py-3">
//                     Product name
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Color
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Category
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     Price
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                     <span className="sr-only">Edit</span>
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Apple MacBook Pro 17"
//                 </th>
//                 <td className="px-6 py-4">
//                     Silver
//                 </td>
//                 <td className="px-6 py-4">
//                     Laptop
//                 </td>
//                 <td className="px-6 py-4">
//                     $2999
//                 </td>
//                 <td className="px-6 py-4 text-right">
//                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
//             </tr>
//             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Microsoft Surface Pro
//                 </th>
//                 <td className="px-6 py-4">
//                     White
//                 </td>
//                 <td className="px-6 py-4">
//                     Laptop PC
//                 </td>
//                 <td className="px-6 py-4">
//                     $1999
//                 </td>
//                 <td className="px-6 py-4 text-right">
//                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
//             </tr>
//             <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Magic Mouse 2
//                 </th>
//                 <td className="px-6 py-4">
//                     Black
//                 </td>
//                 <td className="px-6 py-4">
//                     Accessories
//                 </td>
//                 <td className="px-6 py-4">
//                     $99
//                 </td>
//                 <td className="px-6 py-4 text-right">
//                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
//             </tr>
//         </tbody>
//     </table>
// </div>

//     )
}

export default UserTable