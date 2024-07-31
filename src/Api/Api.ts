import axios from "axios";

const instance = axios.create({ 
    baseURL: 'https://json-placeholder.mock.beeceptor.com/',
    timeout: 2000,
    headers: {"Content-type": "application/json"}
})

export const getUserData = async(url:string,data:{username:string,password:string}) => {
    const response = await instance.post(url,data)
    return response.data
}