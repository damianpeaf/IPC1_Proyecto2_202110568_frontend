import { useEffect, useMemo, useState } from "react";
import { getBorrow } from "../../helpers/borrow";
import { useForm } from "../../hooks/useForm";
import BorrowCard from "./BorrowCard";


function SearchBorrow({ type = '' }) {

    const [borrowData, setBorrowData] = useState({});

    const [formValues, handleInputChange] = useForm({
        id_borrow: ''
    });

    const {
        id_borrow
    } = formValues

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        getBorrow(formValues).then(
            ({ data }) => {
                // console.log(data)
                setBorrowData(data)
            }
        ).catch((e) => {
        })
    }, [formValues]);

    const { errors } = borrowData

    return (
        <div className="flex flex-col w-screen min-h-screen mt-10">
            <form onSubmit={handleSubmit} >
                <div className="mb-6">
                    <label htmlFor="book_author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ID del Prestamo:</label>
                    <input value={id_borrow} type="text" onChange={handleInputChange} name="id_borrow" id="id_borrow" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Autor" autoComplete="off" />
                </div>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Buscar
                    </span>
                </button>
            </form>

            <div className="flex justify-center	">

                {
                    (!errors && Object.keys(borrowData).length > 0)
                        ?
                        (<BorrowCard borrowData={borrowData} key="1" type={type} />)
                        : (
                            <div className="mt-5 mb-5 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                                Información no encontrada
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default SearchBorrow