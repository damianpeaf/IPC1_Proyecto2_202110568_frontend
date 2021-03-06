import { Link, NavLink, useNavigate } from 'react-router-dom'


function UserScreen() {
    return (
        <div className='flex justify-evenly w-screen w-screen'>
            <h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">Opciones: </h1>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <Link
                        to="/createuser"
                    >
                        Crear Usuario
                    </Link>
                </span>
            </button>

            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">

                    <Link
                        to="/searchuser"
                    >
                        Ver y actualizar Usuario
                    </Link>
                </span>
            </button>

        </div>
    )
}

export default UserScreen