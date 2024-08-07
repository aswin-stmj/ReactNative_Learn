import axios from "axios";

const instance = axios.create({ 
    baseURL: 'https://reqres.in/api/',
    timeout: 2000,
})

export const getUserDetails = async(url:string) => {
    const response = await instance.get(url)
    return response.data
}