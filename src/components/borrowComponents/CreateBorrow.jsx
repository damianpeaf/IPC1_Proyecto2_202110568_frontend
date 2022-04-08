import { useEffect, useState } from "react"
import { getAllBooks } from "../../helpers/books"
import { postBorrow } from "../../helpers/borrow"
import { getAllUser } from "../../helpers/users"

function CreateUser() {


    const [posibleUsers, setPosibleUsers] = useState([])

    const [formValues, setFormValues] = useState({})

    const [posibleBooks, setPosibleBooks] = useState([])


    useEffect(() => {
        getAllUser().then(
            ({ data }) => {
                const { results } = data
                setPosibleUsers(results)


            }
        ).catch((e) => {
        })

        getAllBooks().then(
            ({ data }) => {
                const { results } = data
                // console.log(results)
                setPosibleBooks(results)
            }
        ).catch((e) => {
        })

    }, [])

    const handleChangeUser = (e) => {
        const id_user = e.target.value;
        setFormValues({
            ...formValues,
            id_user
        })
    }

    const handleChangeBook = (e) => {
        const id_book = e.target.value;
        setFormValues({
            ...formValues,
            id_book
        })
    }

    const [error, setError] = useState([]);
    const [msg, setMsg] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        postBorrow(formValues).then(
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
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-4/5 mt-5 mx-3 w-full block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 " >


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
                <h1 className="font-small leading-tight text-4xl mt-0 mb-2 text-blue-600">Crear Prestamo</h1>
            </div>

            <div className="mb-6 mt-6">

                <select onChange={handleChangeUser} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" aria-label=".form-select-lg example">
                    <option value=''>Seleccione un Usuario </option>

                    {
                        posibleUsers.map((user) => {
                            return (<option value={user.id_user} key={user.id_user}> {user.user_name} </option>)
                        })
                    }
                </select>
            </div>
            <div className="mb-6 mt-6">

                <select onChange={handleChangeBook} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" aria-label=".form-select-lg example">
                    <option>Seleccione un Libro</option>
                    {
                        posibleBooks.map((book) => {
                            return (<option value={book.id_book} key={book.id_book}> {book.book_title} </option>)
                        })
                    }
                </select>
            </div>
            <div className="mb-6 mt-6">

                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Crear Prestamo
                    </span>
                </button>
            </div>

        </form >
    )
}

export default CreateUser