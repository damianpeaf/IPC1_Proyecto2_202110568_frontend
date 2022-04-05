import { useState } from "react";
import BookForm from "./BookForm";


function CreateBook() {

    const [numberOfRegisters, setNumberOfRegisters] = useState(1);

    const handleAddRegister = () => {
        setNumberOfRegisters((n) => {
            return n + 1
        })
    }

    const handleLessRegister = () => {
        setNumberOfRegisters((n) => {
            return (n - 1 == 0) ? 1 : n - 1
        })
    }

    return (
        <div className="flex flex-col w-screen min-h-screen">
            <div className="flex mt-5  justify-evenly ">
                <h1 className="font-small leading-tight text-4xl mt-0 mb-2 text-blue-600">Numero de registros {numberOfRegisters}: </h1>
                <button type="button" onClick={handleAddRegister} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">+1</button>
                <button type="button" onClick={handleLessRegister} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">-1</button>
            </div>

            <div className="flex justify-center my-5">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Crear Todos
                    </span>
                </button>
            </div>

            <div className="flex">
                {[...Array(numberOfRegisters)].map((e, i) => <BookForm bookData={{}} type="create" key={i} />)}

            </div>
        </div>
    )
}

export default CreateBook