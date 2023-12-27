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
import { useLocalCart } from '@/hooks/cart/useLocalCart'
import { useSession } from 'next-auth/react'
import { BeatLoader } from 'react-spinners'
import { useClient } from '@/hooks/useClient'
import { useCart } from '@/hooks/cart/useCart'


type Props = {
    product: Product
}


export default function ProductContainer({ product }: Props) {
    const {status } = useSession()
    const {checkInCart } = useLocalCart()
    const { handleAddToCart, addToCartMutation } = useCart()
    const isClient = useClient()

    function returnPayload() {
        let payload;
        if (status === 'authenticated') {
            payload = {
                productId: product?._id,
                quantity: 1,
            }
        }
        else {
            payload = {
                productId: product?._id,
                price: product?.price,
                title: product?.title,
                image: product?.image?.url ?? '',
            }
        }
        return payload
    }
    
    const add = () => {
        const payloadData = returnPayload()
        console.log(payloadData)
        handleAddToCart(payloadData)
    }

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

                    <Button className={styles.buttonStyle} title='Add to cart' onClick={add}>
                        <span className={styles.plusIcon}>
                            <FaPlus />
                        </span>
                        {
                            status === 'authenticated' ?
                                (<span className={styles.addButton}>
                                    {addToCartMutation.isLoading ? <span> Adding <BeatLoader size={8} color='#ffffff' /></span> : 'Add to cart'}
                                </span>)
                                :
                                (<span className={styles.addButton}>
                                    {
                                        (checkInCart(product?._id) && isClient) ? 'Added' : 'Add to cart'
                                    }
                                </span>)
                        }
                    </Button>
                </div>
            </div>
            <MoreDetails product={product} />
            <Review productId={product?._id} />
            <AddReviewForm productId={product?._id} />
        </section>
    )
}