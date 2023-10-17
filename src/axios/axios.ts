import axios from 'axios'

const base_URL = process.env.NEXT_PUBLIC_EXTERNAL_API_URL;

export default axios.create({
    baseURL: base_URL,
})

export const axiosPrivate = axios.create({
    baseURL: base_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    }
})
