import getCategories from "@/lib/api/products/getCategories"
import GridProducts from "../components/GridProducts"
import { notFound } from 'next/navigation'
import CardLoader from "@/sharedComponents/card/CardLoader"
import { Suspense } from 'react'


type Params = {
    params: {
        category: string
    }
}

export async function generateStaticParams({ params: { category } }: Params) {
    const categories:Product[] = await getCategories(category)

    return categories.map((product: Product) => ({
        category: product.category
    })
    )
}

export default async function ProductCategory({ params: { category } }: Params) {

    const data:Product[] = await getCategories(category)

    if (data.length === 0) return notFound()

    return (
        <>
            <Suspense fallback={<CardLoader />}>
                <GridProducts books={data} />
            </Suspense>
        </>
    )
}  