import { useState } from "react";
import { postUser } from "../helpers/users";
import { useForm } from "../hooks/useForm";


function CreateUser() {


    const [error, setError] = useState([]);
    const [msg, setMsg] = useState('');

    const [formValues, handleInputChange] = useForm({
        userId: '',
        username: '',
        nickname: '',
        password: '',
        rol: '',
        habilitado: ''
    });

    const {
        userId,
        username,
        nickname,
        password,
        rol,
        habilitado,
    } = formValues

    const handleSubmit = (e) => {
        e.preventDefault();

        postUser(formValues).then(
            ({ data }) => {
                const { errors, msg } = data
                setError(errors)
                setMsg(msg)
            }
        ).catch((e) => {
            setError(['Error en la conexión'])
        })


    }

    return (
        <form className="w-4/5" onSubmit={handleSubmit}>

            {
                error ?
                    error.map((errMsg) =>
                    (
                        <div class="mt-5 mb-5 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                            {errMsg}
                        </div>
                    )
                    ) : (
                        <div class="mt-5 mb-5 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                            {msg}
                        </div>
                    )
            }


            <div className="mb-6 mt-6">
                <label htmlFor="userId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ID Usuario:</label>
                <input name="userId" value={userId} onChange={handleInputChange} type="text" id="userId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ID usuario" autoComplete="off" required />
            </div>

            <div className="mb-6">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username:</label>
                <input name="username" value={username} onChange={handleInputChange} type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" autoComplete="off" required />
            </div>

            <div className="mb-6">
                <label htmlFor="nickname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nickname:</label>
                <input name="nickname" value={nickname} onChange={handleInputChange} type="text" id="nickname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nickname" autoComplete="off" required />
            </div>

            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password:</label>
                <input name="password" value={password} onChange={handleInputChange} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" autoComplete="off" required />
            </div>

            <div className="mb-6">
                <label htmlFor="rol" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rol:</label>
                <input name="rol" value={rol} onChange={handleInputChange} type="text" id="rol" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rol" autoComplete="off" required />
            </div>

            <div className="mb-6">
                <label htmlFor="habilitado" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Habilitado:</label>
                <input name="habilitado" value={habilitado} onChange={handleInputChange} type="text" id="habilitado" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Habilitado" autoComplete="off" required />
            </div>

            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Crear Usuario
                </span>
            </button>


        </form>
    )
}

export default CreateUser