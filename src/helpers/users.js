import Axios from 'axios'
const API_URL = "http://127.0.0.1:5000/"

export const postUser = ({ userId = '', username = '', nickname = '', password = '', rol = '', habilitado = '' }) => {

    const url = `${API_URL}user`

    let estado = ''
    if (habilitado.toLocaleLowerCase() == 'true') {
        estado = true
    } else if (habilitado.toLocaleLowerCase() == 'false') {
        estado = false
    }

    const userDetailFormated = {
        "id_user": userId,
        "user_name": username,
        "user_nickname": nickname,
        "user_password": password,
        "user_rol": rol,
        "available": estado
    }

    const body = JSON.stringify(userDetailFormated)
    return Axios.post(url, body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

}

export const getUser = ({ id_user = '' }) => {

    const url = `${API_URL}user/${id_user}`

    console.log(url)

    return Axios.get(url);

}

export const getAllUser = () => {

    const url = `${API_URL}user`

    console.log(url)

    return Axios.get(url);

}

export const putUser = ({ id_user = '', user_name = '', user_nickname = '', user_password = '', user_rol = '', available = '' }) => {

    console.log(available)

    const url = `${API_URL}user`

    // ! Cuidado cuando se manda false
    // let estado = ''
    // if (available.toLocaleLowerCase() == 'true') {
    //     estado = true
    // } else if (available.toLocaleLowerCase() == 'false') {
    //     estado = false
    // }

    const userDetailFormated = {
        id_user,
        user_name,
        user_nickname,
        user_password,
        user_rol,
        available
    }

    const body = JSON.stringify(userDetailFormated)
    return Axios.put(url, body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

}