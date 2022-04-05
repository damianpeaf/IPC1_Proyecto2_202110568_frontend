
function CreateUser() {
    return (
        <form className="w-4/5">
            <div className="mb-6">
                <label htmlFor="userId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ID Usuario:</label>
                <input type="text" id="userId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ID usuario" autoComplete="off" required />
            </div>

            <div className="mb-6">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username:</label>
                <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" autoComplete="off" required />
            </div>

            <div className="mb-6">
                <label htmlFor="nickname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nickname:</label>
                <input type="text" id="nickname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nickname" autoComplete="off" required />
            </div>

            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password:</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" autoComplete="off" required />
            </div>

            <div className="mb-6">
                <label htmlFor="rol" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rol:</label>
                <input type="text" id="rol" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rol" autoComplete="off" required />
            </div>

            <div className="mb-6">
                <label htmlFor="habilitado" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Habilitado:</label>
                <input type="text" id="habilitado" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Habilitado" autoComplete="off" required />
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