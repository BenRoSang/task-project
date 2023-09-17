import { Link } from "react-router-dom"
import Loading from "./components/Loading";
import UserTable from "./components/UserTable";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";


function Home() {
    const {isLoading} = useContext(UserContext);
    if(isLoading) {
        return <Loading />
    }
    return (
    <div className="list w-full md:w-8/12">
        <div className="mb-4">
            <Link to={'/update'} className="items-center text-gray-200 text-[14px] px-3 py-2 rounded-md bg-stone-700 font-semibold mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>
                Add New Employee
            </Link>
        </div>
        <UserTable />
    </div>
    )
}

export default Home