import axios from "axios";


URL = process.env.REACT_APP_API

const obt_personal = async () => {
    try {
        let {data} = await axios.get(`${URL}users`)
        console.log(data)
        return data
    } catch (error) {
        throw error
    }
}

const agregar_personal = async (nuevoPersonal) => {
    try {
        const headers = {
            "Content-Type": "application/json"
        }
        const {data} = await axios.post(`${URL}users`, nuevoPersonal, {headers})
        return data
    } catch (error) {
        throw error
    }
}


export {obt_personal, agregar_personal}