
import Axios from 'axios'
const API_URL = "https://ipc1-c-202110568.herokuapp.com/"


export const postBorrow = (borrowData) => {


    const url = `${API_URL}borrow`

    console.log(url)

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