import { base_URL } from "@/lib/constants/baseUrl";

export default async function getCategories(category: string) {
        try {
                const res = await fetch(`${base_URL}/products/category/${category}`);
                const product = await res.json()
                return product
        }
        catch (err) {
                console.log(err)
        }

}