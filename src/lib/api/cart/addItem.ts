import { base_URL } from "@/lib/constants/baseUrl";

export async function addItemToCart(data: any) {
    const { userId, productId, quantity } = data
    try {
        const res = await fetch(`${base_URL}/carts/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productId: productId,
                quantity: quantity
            }),
        });
        const data = await res.json();
        return data;
    }
    catch (err) {
        console.log(err)
    }
}
