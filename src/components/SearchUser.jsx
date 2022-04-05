import UserCards from "./UserCards"
import { useState, useEffect, useMemo } from 'react'
import { useForm } from "../hooks/useForm";

import { getUser } from "../helpers/users";


function SearchUser() {

    const [userData, setUserData] = useState({});

    const [formValues, handleInputChange] = useForm({
        id_user: ''
    });

    const {
        id_user
    } = formValues

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useMemo(() => {
        getUser(formValues).then(
            ({ data }) => {
                setUserData(data)
            }
        ).catch((e) => {
        })
    }, [formValues]);

    const { msg } = userData
    // console.log(userData)

    return (
        <div className="w-screen min-h-screen flex items-center flex-col">
            <div className="w-4/5 mt-3">
                <form onSubmit={handleSubmit} >
                    <div className="mb-6">
                        <label htmlFor="id_user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ID Usuario:</label>
                        <input value={id_user} type="text" onChange={handleInputChange} name="id_user" id="id_user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ID usuario" autoComplete="off" required />
                    </div>
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Buscar
                        </span>
                    </button>
                </form>
            </div>

            <div className="w-4/5 flex justify-center">
                {
                    (!msg && Object.keys(userData).length > 0)
                        ?
                        (
                            <UserCards key={id_user} userData={userData} />
                        )
                        : (
                            <div className="mt-5 mb-5 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                                {(msg) ? msg : "Ingrese una ID de busqueda"}
                            </div>
                        )
                }
            </div>

        </div>
    )
}

export default SearchUser
