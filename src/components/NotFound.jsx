import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className='flex justify-center flex-col gap-5 items-center h-[80vh]'>
        <h1 className='text-3xl'>404 Not found!</h1>
        <Link className="block py-3 px-2 text-white rounded bg-gray-500" to={'/'}>Back to Home</Link>
    </div>
  )
}

export default NotFound