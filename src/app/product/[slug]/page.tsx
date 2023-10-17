import { getProduct, getProducts } from "@/lib/api/products/getProducts"
import ProductContainer from "../components/ProductContainer"

type params = {
    params: {
        slug: string
    }
}
export async function generateStaticParams() {
    const products: Product[] = await getProducts()

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
    const product = await getProduct(slug)
    return <ProductContainer product={product} />

}