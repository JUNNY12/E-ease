'use client'
import { Typography } from "@/sharedComponents/Typography/Typography"
import styles from "./styles/featured.module.scss"
import { Card } from "@/sharedComponents/card/Card"
import Image from "next/image"

export const images = [
    {
        id: 1,
        path: '/images/image 1.jpg'
    },
    {
        id: 2,
        path: '/images/image2.jpg'
    },
    {
        id: 3,
        path: '/images/image3.jpg'
    },
    {
        id: 4,
        path: '/images/image 1.jpg'
    },
    {
        id: 5,
        path: '/images/image3.jpg'
    },
    {
        id: 6,
        path: '/images/image2.jpg'
    },
    {
        id: 7,
        path: '/images/image 1.jpg'
    },
    {
        id: 8,
        path: '/images/image2.jpg'
    },
]


export default function ProductGrid() {

    return (
        <section className={styles.productsGrid}>
            <Typography variant={2} className={styles.productHeader}>Popular Books</Typography>
            <div className={styles.productsGridContainer}>
                {
                    images.map((image) => {
                        return (
                            <div key={image.id}>
                                <Card className={styles.card}>
                                    <Image
                                        src={image.path}
                                        priority={true}
                                        fill={true}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                        alt="product image"
                                        className={styles.imageStyle}
                                    />
                                    <div className={styles.buttonWrap} role='button'>
                                        <span> Lorem ipsum</span>
                                        <span role='button' className={styles.priceButton}>$20.00</span>
                                    </div>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}