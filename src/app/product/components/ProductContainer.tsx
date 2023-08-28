import { Typography } from '@/sharedComponents/Typography/Typography'
import styles from '../styles/product.module.scss'
import Image from 'next/image'
import { Rating } from '@/sharedComponents/Rating/Rate'
import { formatCurrency } from '@/lib/utils/formatCurrency'
import { Button } from '@/sharedComponents/Button/Button'
import { FaPlus } from 'react-icons/fa'
import MoreDetails from './MoreDetails'
import Review from './Review'
import AddReviewForm from './AddReviewForm'

type Props = {
    product: any
}


export default function ProductContainer({ product }: Props) {
    console.log(product)
    return (
        <section className={styles.productContainer} >
            <div className={styles.wrapperContainer}>

                <div className={styles.imageContainer}>
                    <Image src='/images/image3.jpg'
                        className={styles.imageStyle}
                        priority={true} alt='product image' fill={true} />
                </div>

                <div>
                    <Typography className={styles.productTitle} variant={1}>
                        {product.name}
                    </Typography>

                    <p className={styles.price}>
                        {formatCurrency(product.price)}
                    </p>

                    <p className={styles.description}>
                        {product.description}
                    </p>

                    <div className={styles.ratings}>
                        <Rating rating={5} />
                    </div>

                    <Button className={styles.buttonStyle}>
                        <span className={styles.plusIcon}>
                            <FaPlus />
                        </span>
                        <span className={styles.addButton}>
                            Add to cart
                        </span>
                    </Button>
                </div>
            </div>
            <MoreDetails />
            <Review />
            <AddReviewForm />
        </section>
    )
}