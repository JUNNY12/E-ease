import { base_URL } from "@/lib/constants/baseUrl";
import { GetApiAuth } from "@/lib/fetchApi";

export async function getCart(userId:any) {
    console.log(userId)
    try{
        const url = `${base_URL}/carts/${userId}`
        const res = await GetApiAuth(url)
        const data = await res.json()
        console.log(data)
        return data
    }
    catch(err){
        console.log(err)
    }
} 