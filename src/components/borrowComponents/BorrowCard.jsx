import { useState } from "react";
import { returnBorrow } from "../../helpers/borrow";
import { useForm } from "../../hooks/useForm";

function BorrowCard({ borrowData, type = '' }) {

    const [formValues] = useForm(borrowData);
    // console.log(borrowData)
    // console.log(formValues)

    const [error, setError] = useState([]);
    const [msg, setMsg] = useState('');

    const {
        borrow_book,
        borrow_date,
        id_borrow,
        id_user,
        returned
    } = formValues


    const handleSubmit = (e) => {

        console.log("asdakj")

        e.preventDefault();
        returnBorrow(formValues).then(
            ({ data }) => {
                const { errors, msg } = data
                setError(errors)
                setMsg(msg)
            }
        ).catch((e) => {
            setError(['Error en la conexión'])
        })
    }

    const handleReturnBorrow = () => {

        console.log()

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
                    <label htmlFor="id_borrow" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ID Prestamo:</label>
                    <input disabled name="id_borrow" value={id_borrow} type="text" id="id_borrow" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ID usuario" autoComplete="off" />
                </div>


                <div className="mb-6 mt-6">
                    <label htmlFor="borrow_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fecha del prestamo:</label>
                    <input disabled name="borrow_date" value={borrow_date} type="text" id="borrow_date" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ID usuario" autoComplete="off" />
                </div>

                <div className="mb-6 mt-6">
                    <label htmlFor="returned" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Regresado:</label>
                    <input disabled name="returned" value={returned} type="text" id="returned" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ID usuario" autoComplete="off" />
                </div>

                <div className="mb-6 mt-6">
                    <label htmlFor="borrow_book" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Titulo del libro:</label>
                    <input disabled name="borrow_book" value={borrow_book.book_title} type="text" id="borrow_book" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ID usuario" autoComplete="off" />
                </div>

                <div className="mb-6 mt-6">
                    <label htmlFor="id_user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Id del usuario:</label>
                    <input disabled name="id_user" value={id_user} type="text" id="id_user" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ID usuario" autoComplete="off" />
                </div>

                {(type === 'return')
                    ? (<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span onClick={handleReturnBorrow} className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Regresar Prestamo
                        </span>
                    </button>)
                    : (<></>)
                }
            </form>
        </div>
    )
}

export default BorrowCard