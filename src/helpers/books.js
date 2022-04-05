
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