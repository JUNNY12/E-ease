import { getProduct } from "@/lib/api/products/getProducts"
import ProductContainer from "../components/ProductContainer"

type params = {
    params: {
        slug: string
    }
}


export default async function page({ params: { slug } }: params) {
    const product = await getProduct(slug)
    return <ProductContainer product={product} />

}