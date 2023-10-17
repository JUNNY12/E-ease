'use client'
import { Typography } from "@/sharedComponents/Typography/Typography"
import styles from "./styles/featured.module.scss"
import { Card } from "@/sharedComponents/card/Card"
import Image from "next/image"
import { useQuery } from "@tanstack/react-query"
import { getTopProducts } from "@/lib/api/products/getTopProducts"
import { formatCurrency } from "@/lib/utils/formatCurrency"
import CardLoader from "@/sharedComponents/card/CardLoader"
import Link from "next/link"

export default function ProductGrid() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: () => getTopProducts()
    })

    return (
        <section className={styles.productsGrid}>
            <Typography variant={2} className={styles.productHeader}>Popular Books</Typography>
            <div className={styles.productsGridContainer}>
                {
                    isLoading && [...Array(8)].map((_, i) => {
                        return (
                            <div key={i}>
                                <CardLoader />
                            </div>
                        )
                    })
                }
                {
                    data?.map((product: Product) => {
                        return (
                            <div key={product._id}>
                                <Card className={styles.card}>
                                    <Image
                                        src={product.image.url ?? ''}
                                        fill={true}
                                        alt="product image"
                                        className={styles.imageStyle}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <Link href={`/product/${product.slug}`}>
                                    <div className={styles.buttonWrap} role='button'>
                                        <span>{`${product?.title?.substring(0, 10) + '...'}`}</span>
                                        <span role='button' className={styles.priceButton}>{formatCurrency(product.price ?? 0)}</span>
                                    </div>
                                    </Link>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}