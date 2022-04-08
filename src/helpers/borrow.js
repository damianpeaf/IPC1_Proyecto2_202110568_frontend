
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

export const returnBorrow = ({ id_borrow }) => {

    const url = `${API_URL}borrow/${id_borrow}`
    return Axios.put(url);

}

export const getBorrow = ({ id_borrow }) => {

    const url = `${API_URL}borrow/${id_borrow}`
    return Axios.get(url);

}