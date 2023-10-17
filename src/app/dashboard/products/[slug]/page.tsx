import ProductDetails from "../components/ProductDetails";
import { getProduct, getProducts } from "@/lib/api/products/getProducts";


type params = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const products:Product[] = await getProducts()

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
    const product:Product = await getProduct(slug)
    return <ProductDetails book={product} />

}