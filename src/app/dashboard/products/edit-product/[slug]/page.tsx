import { base_URL } from "@/lib/constants/baseUrl"
import Container from "./component/Container"

type params = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const res = await fetch(`${base_URL}/products`)
    const products = await res.json()

    if (!products) return []

    return products.map((product: Product) => {
        return {
            params: {
                slug: product.slug
            }
        }
    })
}

export default async function page({ params: { slug } }: params) {
    const res = await fetch(`${base_URL}/products/${slug}`)
    const book = await res.json()
    return <Container book={book} />
}