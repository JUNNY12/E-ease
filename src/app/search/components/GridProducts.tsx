import { formatCurrency } from '@/lib/utils/formatCurrency';
import styles from '../styles/search.module.scss'
import { Card } from '@/sharedComponents/card/Card'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    books: Product[]
}

export default function GridProducts({ books }: Props) {
    return (
        <div className={styles.gridProducts}>
            {
                books?.map((book: Product) => {
                    return (
                        <div key={book?._id}>
                            <Card className={styles.card}>
                                <Image
                                    src={book?.image?.url ?? ''}
                                    priority={true}
                                    fill={true}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                    alt="product image"
                                    className={styles.imageStyle}
                                />
                                <Link href={`/product/${book.slug}`}>
                                    <div className={styles.buttonWrap} role='button'>
                                        <span>{`${book?.title?.substring(0, 10) + '...'}`}</span>
                                        <span role='button' className={styles.priceButton}>{formatCurrency(book?.price ?? 0)}</span>
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