"use client"
import { formatCurrency } from "@/lib/utils/formatCurrency"
import styles from "./cart.module.scss"
import Image from "next/image"
import { Button } from "../Button/Button"
import { useCart } from "@/hooks/cart/useCart"
import { useSession } from "next-auth/react"

export const CartItem = () => {
    const { status } = useSession()
    const { cartData, handleAddToCart, handleDecreaseItem, handleRemoveFromCart } = useCart()

    const add = (payload: any): (() => void) => {
        return () => {
            handleAddToCart(payload)
        };
    }

    const removeItem = (payload: any): (() => void) => {
        return () => {
            handleRemoveFromCart(payload)
        };
    };

    const decreaseItem = (payload: any): (() => void) => {
        return () => {
            handleDecreaseItem(payload)
        };
    };

    return (
        <div className={styles.cartItemContainer}>
            {
                cartData?.items?.map((item: any, i) => {
                    return (
                        <div key={i} className={styles.itemWrap}>
                            <div className={styles.imageCart}>
                                <div className={styles.image}>
                                    <Button onClick={removeItem({ productId: item.productId, itemId:item._id })} className={styles.delete}>X</Button>
                                    <Image
                                        src={
                                            status === 'authenticated' ? item?.productId?.image?.url : item?.image
                                        }
                                        fill={true}
                                        alt={
                                            status === 'authenticated' ? item?.productId?.title : item?.title
                                        }
                                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw)"
                                    />
                                </div>
                                <div className={styles.name}>
                                    {
                                        status === 'authenticated' ? item?.productId?.title : item?.title
                                    }
                                </div>
                            </div>
                            <div>
                                <div className={styles.price}>
                                    {formatCurrency(item.total ?? 0)}
                                </div>
                                <div className={styles.buttonWrap}>
                                    <Button
                                        onClick={decreaseItem({
                                            productId: status === 'authenticated' ? item?._id : item?.productId,
                                        })}
                                        className={styles.btnDecrease}>
                                        -
                                    </Button>
                                    <div>
                                        {item.quantity}
                                    </div>
                                    <Button
                                        onClick={add({
                                            productId: status === 'authenticated' ? item?.productId?._id : item?.productId,
                                            quantity: 1,
                                        })}
                                    >
                                        <span>
                                            +
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}