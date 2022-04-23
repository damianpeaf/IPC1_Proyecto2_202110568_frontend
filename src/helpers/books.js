
import Axios from 'axios'
const API_URL = "http://127.0.0.1:5000/"



export const postBook = (bookData) => {


    const url = `${API_URL}book`

    const arrData = [bookData]

    const body = JSON.stringify(arrData)
    return Axios.post(url, body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

}

export const getBook = ({ book_author = '', book_title }) => {

    const url = `${API_URL}book?author=${encodeURIComponent(book_author)}&titulo=${encodeURIComponent(book_title)}`

    console.log(url)

    return Axios.get(url);

}

export const putBook = (bookData) => {

    const url = `${API_URL}book`

    const body = JSON.stringify(bookData)
    return Axios.put(url, body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

}


export const deleteBook = (bookId) => {

    const url = `${API_URL}book/${bookId}`

    return Axios.delete(url);

}

export const getAllBooks = () => {

    const url = `${API_URL}book/all`

    console.log(url)

    return Axios.get(url);

}


export const getReport = () => {

    const url = `${API_URL}report`
    return Axios.get(url);

}
