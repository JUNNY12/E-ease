import styles from '../styles/search.module.scss'
import { Card } from '@/sharedComponents/card/Card'
import Image from 'next/image'
import Link from 'next/link'
import slugify from "slugify";

type Props = {
    data: any
}

export default function GridProducts({ data }: Props) {
    return (
        <div className={styles.gridProducts}>
            {
                data?.slice(0, 7)?.map((item: any) => {
                    const productSlug = slugify(item.name, { lower: true })

                    return (
                        <div key={item.id}>
                            <Card className={styles.card}>
                                <Image
                                    src={`/images/image3.jpg`}
                                    priority={true}
                                    fill={true}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                    alt="product image"
                                    className={styles.imageStyle}
                                />
                                <Link href={`/product/${productSlug}`}>
                                    <div className={styles.buttonWrap} role='button'>
                                        <span>{`${item.name.substring(0, 10) + '...'}`}</span>
                                        <span role='button' className={styles.priceButton}>$20.00</span>
                                    </div>
                                </Link>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}