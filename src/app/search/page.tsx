import GridProducts from "./components/GridProducts"
import { getProducts } from "@/lib/api/products/getProducts"
import { Suspense } from 'react'
import CardLoader from "@/sharedComponents/card/CardLoader"
import { notFound } from "next/navigation"

export default async function Search() {
    const products:Product[] = await getProducts()
    return (
        <>
            <Suspense fallback={<CardLoader />}>
                <GridProducts books={products} />
            </Suspense>
        </>
    )
}
