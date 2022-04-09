import { useState, useEffect } from "react";
import { putUser } from "../helpers/users";
import { useForm } from "../hooks/useForm";

function UserCards({ userData }) {


    const [error, setError] = useState([]);
    const [msg, setMsg] = useState('');

    const [formValues, handleInputChange] = useForm(userData);

    const {
        id_user,
        user_name,
        user_nickname,
        user_password,
        user_rol,
        available,
    } = formValues


    const handleSubmit = (e) => {
        e.preventDefault();

        putUser(formValues).then(
            ({ data }) => {
                const { errors, msg } = data

                console.log(data)

                setError(errors)
                setMsg(msg)
            }
        ).catch((e) => {
            setError(['Error en la conexión'])
        })
    }

    return (
        <div className="animate__animated animate__backInDown mt-5 w-full block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
            <form className="w-4/5" onSubmit={handleSubmit}>

                {
                    error ?
                        error.map((errMsg) =>
                        (
                            <div key={errMsg} className="mt-5 mb-5 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                                {errMsg}
                            </div>
                        )
                        ) : (
                            <div key={msg} className="mt-5 mb-5 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                                {msg}
                            </div>
                        )
                }


                <div className="mb-6 mt-6">
                    <label htmlFor="id_user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ID Usuario:</label>
                    <input name="id_user" disabled value={id_user} onChange={handleInputChange} type="text" id="id_user" className="cursor-not-allowed  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ID usuario" autoComplete="off" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username:</label>
                    <input name="user_name" value={user_name} onChange={handleInputChange} type="text" id="user_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" autoComplete="off" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="user_nickname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nickname:</label>
                    <input name="user_nickname" value={user_nickname} onChange={handleInputChange} type="text" id="user_nickname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nickname" autoComplete="off" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="user_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password:</label>
                    <input name="user_password" value={user_password} onChange={handleInputChange} type="user_password" id="user_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user_password" autoComplete="off" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="user_rol" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rol:</label>
                    <input name="user_rol" value={user_rol} onChange={handleInputChange} type="text" id="user_rol" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user_rol" autoComplete="off" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="available" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Habilitado:</label>
                    <input name="available" value={available} onChange={handleInputChange} type="text" id="available" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Habilitado" autoComplete="off" required />
                </div>

                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Actualizar Usuario
                    </span>
                </button>

            </form>
        </div>
    )
}

export default UserCards