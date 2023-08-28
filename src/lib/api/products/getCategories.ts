import { rootUrl } from "./getProducts"

export default async function getCategories(category: string) {
        const res = await fetch(`${rootUrl}/api/categories/${category}`)
        const data = await res.json()

        return data
}