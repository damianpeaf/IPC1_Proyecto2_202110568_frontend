
import Axios from 'axios'
const API_URL = "http://127.0.0.1:5000/"


export const postBorrow = (borrowData) => {


    const url = `${API_URL}borrow`

    const body = JSON.stringify(borrowData)
    return Axios.post(url, body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

}