import { base_URL } from "@/lib/constants/baseUrl";

export async function getReviews(productId: string | undefined) {
    try {
        const res = await fetch(`${base_URL}/reviews/${productId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'applicationn/json'
            }
        })

        const data = await res.json()
        return data;
    }
    catch (err) {
        console.log(err)
        throw err;
    }

}