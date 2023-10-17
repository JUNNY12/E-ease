"use client"
import { formatCurrency } from "@/lib/utils/formatCurrency"
import styles from "./cart.module.scss"
import Image from "next/image"
import { Button } from "../Button/Button"
import { useCart } from "@/hooks/cart/useCart"

export const CartItem = () => {
    const { removeFromCart, decreaseQuantity, updateQuantity, state: { cart } } = useCart()

    const addItem = (payload: any): (() => void) => {
        return () => {
            updateQuantity(payload)
        };
    };

    const removeItem = (payload: any): (() => void) => {
        return () => {
            removeFromCart(payload)
        };
    };

    const decreaseItem = (payload: any): (() => void) => {
        return () => {
            decreaseQuantity(payload)
        };
    };

    return (
        <div className={styles.cartItemContainer}>
            {
                cart?.items?.map((item, i) => {
                    return (
                        <div key={i} className={styles.itemWrap}>
                            <div className={styles.imageCart}>
                                <div className={styles.image}>
                                    <Button onClick={removeItem({ productId: item.productId })} className={styles.delete}>X</Button>
                                    <Image src={`/images/image 1.jpg`} fill={true} alt='text' />
                                </div>
                                <div className={styles.name}>
                                    lorem ipsum
                                </div>
                            </div>
                            <div>
                                <div className={styles.price}>
                                    {formatCurrency(item.total ?? 0)}
                                </div>
                                <div className={styles.buttonWrap}>
                                    <Button
                                        onClick={decreaseItem({ productId: item.productId })}
                                        className={styles.btnDecrease}>
                                        -
                                    </Button>
                                    <div>
                                        {item.quantity}
                                    </div>
                                    <Button onClick={addItem({ productId: item.productId })} className={styles.btnIncrease}>
                                        +
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className={styles.totalPrice}>
                <div>
                    Total price
                </div>
                <div>
                    {formatCurrency(cart?.subTotal ?? 0)}
                </div>
            </div>

            <div >
                <Button className={styles.btnCheckout}>Proceed to checkout</Button>
            </div>
        </div>
    )
}