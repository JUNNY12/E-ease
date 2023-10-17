"use client"
import { Typography } from '@/sharedComponents/Typography/Typography'
import styles from '../styles/product.module.scss'
import Image from 'next/image'
import { Rating } from '@/sharedComponents/Rating/Rate'
import { formatCurrency } from '@/lib/utils/formatCurrency'
import { Button } from '@/sharedComponents/Button/Button'
import { FaPlus } from 'react-icons/fa'
import MoreDetails from '../../../sharedComponents/Product/MoreDetails'
import Review from '@/sharedComponents/Product/Review'
import AddReviewForm from './AddReviewForm'
import { useCart } from '@/hooks/cart/useCart'
import useHandleToggle from '@/hooks/toggle/useToggleHeader'

type Props = {
    product: Product
}


export default function ProductContainer({ product }: Props) {
    const { addTocart, state: { cart }, checkInCart } = useCart()
    const {handleOpenCart} = useHandleToggle()
    const payload = {
        productId: product?._id,
        price: product?.price,
    }

    const add = (payload: any): (() => void) => {
        return () => {
            addTocart(payload)
            handleOpenCart()
        };
    };
    
    return (
        <section className={styles.productContainer} >
            <div className={styles.wrapperContainer}>

                <div className={styles.imageContainer}>
                    <Image src={product?.image?.url ?? ''}
                        className={styles.imageStyle}
                        priority={true} alt='product image' fill={true} />
                </div>

                <div>
                    <Typography className={styles.productTitle} variant={1}>
                        {product?.title}
                    </Typography>

                    <p className={styles.price}>
                        {formatCurrency(product?.price ?? 0)}
                    </p>

                    <p className={styles.description}>
                        {product?.description}
                    </p>

                    <div className={styles.ratings}>
                        <Rating rating={product?.averageRating ?? 0} />
                    </div>

                    <Button className={styles.buttonStyle} title='Add to cart' onClick={add(payload)}>
                        <span className={styles.plusIcon}>
                            <FaPlus />
                        </span>
                        <span className={styles.addButton}>
                            {
                                checkInCart(product?._id) ? 'Increase quantity' : 'Add to cart'
                            }
                        </span>
                    </Button>
                </div>
            </div>
            <MoreDetails product={product} />
            <Review productId={product?._id} />
            <AddReviewForm productId={product?._id} />
        </section>
    )
}