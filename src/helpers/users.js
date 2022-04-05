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

    console.log(body)

    return Axios.post(url, body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

}