import { useState, useEffect } from "react";
import { deleteBook, postBook, putBook } from "../../helpers/books";
import { useForm } from "../../hooks/useForm";

function BookForm({ bookData, type = 'create' }) {


    const [error, setError] = useState([]);
    const [msg, setMsg] = useState('');

    const [formValues, handleInputChange] = useForm(bookData);

    const {
        id_book,
        book_author,
        book_title,
        book_edition,
        book_editorial,
        book_year,
        book_description,
        book_available_copies,
        book_unavailable_copies,
        book_copies
    } = formValues


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleCreate = () => {
        postBook(formValues).then(
            ({ data }) => {
                const { errors, msg } = data
                setError(errors)
                setMsg(msg)
            }
        ).catch((e) => {
            setError(['Error en la conexión'])
        })
    }

    const handleUpdate = () => {
        putBook(formValues).then(
            ({ data }) => {
                const { errors, msg } = data
                setError(errors)
                setMsg(msg)
            }
        ).catch((e) => {
            setError(['Error en la conexión'])
        })
    }

    const handleDelete = () => {
        deleteBook(id_book).then(
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
        <div className="mt-5 mx-3 w-full block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
            <form className="w-4/5" onSubmit={handleSubmit}>

                {
                    error ?
                        error.map((errMsg) =>
                        (
                            <div key={errMsg} class="mt-5 mb-5 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                                {errMsg}
                            </div>
                        )
                        ) : (
                            <div key={msg} class="mt-5 mb-5 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                                {msg}
                            </div>
                        )
                }


                <div className="mb-6 mt-6">
                    <label htmlFor="id_book" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ID:</label>
                    <input name="id_book" value={id_book} onChange={handleInputChange} type="text" id="id_book" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ID usuario" autoComplete="off" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="book_author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Autor:</label>
                    <input name="book_author" value={book_author} onChange={handleInputChange} type="text" id="book_author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="book_author" autoComplete="off" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="book_title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Titulo:</label>
                    <input name="book_title" value={book_title} onChange={handleInputChange} type="text" id="book_title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="book_title" autoComplete="off" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="book_edition" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Edicion:</label>
                    <input name="book_edition" value={book_edition} onChange={handleInputChange} type="number" id="book_edition" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="book_edition" autoComplete="off" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="book_editorial" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Editorial:</label>
                    <input name="book_editorial" value={book_editorial} onChange={handleInputChange} type="text" id="book_editorial" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="book_editorial" autoComplete="off" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="book_year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Año:</label>
                    <input name="book_year" value={book_year} onChange={handleInputChange} type="text" id="book_year" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="book_year" autoComplete="off" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="book_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Descripcion:</label>
                    <input name="book_description" value={book_description} onChange={handleInputChange} type="text" id="book_description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="book_description" autoComplete="off" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="book_available_copies" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Copias habiles:</label>
                    <input name="book_available_copies" value={book_available_copies} onChange={handleInputChange} type="number" id="book_available_copies" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="book_available_copies" autoComplete="off" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="book_unavailable_copies" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Copias no habiles:</label>
                    <input name="book_unavailable_copies" value={book_unavailable_copies} onChange={handleInputChange} type="number" id="book_unavailable_copies" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="book_unavailable_copies" autoComplete="off" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="book_copies" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Copias totales:</label>
                    <input name="book_copies" value={book_copies} onChange={handleInputChange} type="number" id="book_copies" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="book_copies" autoComplete="off" required />
                </div>

                {(type === 'create')
                    ? (<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span onClick={handleCreate} className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Crear
                        </span>
                    </button>)
                    : (<>
                        <div>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                                <span onClick={handleUpdate} className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Actualizar
                                </span>
                            </button>
                        </div>
                        <div>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                <span onClick={handleDelete} className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Eliminar
                                </span>
                            </button>
                        </div>
                    </>)
                }
            </form>
        </div>
    )
}

export default BookForm