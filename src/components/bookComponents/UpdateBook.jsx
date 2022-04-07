import { useEffect, useMemo, useState } from "react";
import { getBook } from "../../helpers/books";
import { useForm } from "../../hooks/useForm";
import BookForm from "./BookForm";


function CreateBook() {

    const [bookData, setBookData] = useState([]);

    const [formValues, handleInputChange] = useForm({
        book_author: '',
        book_title: ''
    });

    const {
        book_author,
        book_title
    } = formValues

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        getBook(formValues).then(
            ({ data }) => {
                const { results } = data
                console.log(results)
                setBookData(results)
            }
        ).catch((e) => {
        })
    }, [formValues]);

    return (
        <div className="flex flex-col w-screen min-h-screen">
            <form onSubmit={handleSubmit} >
                <div className="mb-6">
                    <label htmlFor="book_author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Autor:</label>
                    <input value={book_author} type="text" onChange={handleInputChange} name="book_author" id="book_author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Autor" autoComplete="off" />
                </div>
                <div className="mb-6">
                    <label htmlFor="book_title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Titulo:</label>
                    <input value={book_title} type="text" onChange={handleInputChange} name="book_title" id="book_title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Titulo" autoComplete="off" />
                </div>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Buscar
                    </span>
                </button>
            </form>

            <div className="flex flex-wrap">


                {
                    (bookData.length > 0)
                        ?
                        bookData.map((book, i) => (
                            (<BookForm bookData={book} key={i} type="update" />)
                        ))
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

export default CreateBook