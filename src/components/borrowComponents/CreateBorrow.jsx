import { useEffect, useState } from "react"
import { getAllBooks } from "../../helpers/books"
import { getAllUser } from "../../helpers/users"

function CreateUser() {


    const [posibleUsers, setPosibleUsers] = useState([])



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
                console.log(results)
                setPosibleBooks(results)
            }
        ).catch((e) => {
        })

    }, [])

    console.log(posibleUsers)
    console.log(posibleBooks)



    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <form className="flex flex-col justify-center items-center w-4/5 mt-5 mx-3 w-full block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 " >

            <div className="mb-6 mt-6">

                <select onChange={handleChange} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" aria-label=".form-select-lg example">
                    {
                        posibleUsers.map((user) => {
                            return (<option value={user.id_user}> {user.user_name} </option>)
                        })
                    }
                </select>
            </div>
            <div className="mb-6 mt-6">

                <select onChange={handleChange} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" aria-label=".form-select-lg example">
                    {
                        posibleBooks.map((book) => {
                            return (<option value={book.id_book}> {book.book_title} </option>)
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