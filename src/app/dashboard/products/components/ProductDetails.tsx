import { Typography } from '@/sharedComponents/Typography/Typography'
import styles from '../../styles/product.details.module.scss'
import Image from 'next/image'
import { Rating } from '@/sharedComponents/Rating/Rate'
import { formatCurrency } from '@/lib/utils/formatCurrency'
import Review from '@/sharedComponents/Product/Review'
import MoreDetails from '@/sharedComponents/Product/MoreDetails'


type Props = {
    book: Product
}

export default function ProductDetails({ book }: Props) {
    return (
        <section className={styles.productContainer} >
            <div className={styles.wrapperContainer}>

                <div className={styles.imageContainer}>
                    <Image src={book?.image?.url ?? ''}
                        className={styles.imageStyle}
                        priority={true} alt={book?.title ?? ''} fill={true} />
                </div>

                <div>
                    <Typography className={styles.productTitle} variant={1}>
                        {book?.title}
                    </Typography>

                    <p className={styles.price}>
                        {formatCurrency(book?.price ?? 0)}
                    </p>

                    <p className={styles.description}>
                        {book?.description}
                    </p>

                    <div className={styles.ratings}>
                        <Rating rating={book?.averageRating ?? 0} />
                    </div>
                </div>
            </div>
            <MoreDetails product={book} />
            <Review productId={book._id} />
        </section>
    )
}