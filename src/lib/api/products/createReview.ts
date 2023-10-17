import { base_URL } from "@/lib/constants/baseUrl";
import { toast } from "react-toastify";

export async function addReview(review: any) {
    try {
        const res = await fetch(`${base_URL}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        });

        const data = await res.json();

        if (res.ok) {
            toast.success('Review added successfully', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000,
                hideProgressBar: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}
