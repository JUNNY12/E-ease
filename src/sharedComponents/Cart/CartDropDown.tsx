"use client"
import { Button } from '../Button/Button'
import { Typography } from '../Typography/Typography'
import styles from './cart.module.scss'
import useHandleToggle from '@/hooks/toggle/useToggleHeader'
import { useEffect, useRef } from 'react'
import EmptyCart from './EmptyCart'
import { useLocalCart } from '@/hooks/cart/useLocalCart'
import { CartItem } from './cartItem'
import { formatCurrency } from '@/lib/utils/formatCurrency'
import Link from 'next/link'
import { useServerCartContext } from '@/hooks/cart/useServerCartContext'
import { useSession } from 'next-auth/react'
import { useCart } from '@/hooks/cart/useCart'



export default function CartDropDown() {
    const { handleCloseCart, handleOutsideClick, toggleCart } = useHandleToggle()
    const { state: { cart } } = useLocalCart()
    const { status } = useSession()
    const { cartData, isEmpty } = useCart()
    const ref = useRef<HTMLDivElement>(null)

    if (toggleCart) {
        ref.current?.classList.toggle('cart-open')
    }

    useEffect(() => {
        document.addEventListener('click', (e) => handleOutsideClick(e, ref))
        return () => {
            document.removeEventListener('click', (e) => handleOutsideClick(e, ref))
        }
    }, [handleOutsideClick])

    return (
        <div ref={ref} className={styles.cartContainer}>
            <div className={styles.topHeader}>
                <Typography variant={2}>
                    My Cart
                </Typography>
                <Button className={styles.closeButton} onClick={handleCloseCart} title='close cart' >X</Button>
            </div>

            <div>
                {
                    isEmpty && <EmptyCart />
                }
            </div>

            <div className={styles.cartItemWrapper}>
                {
                    !isEmpty && <CartItem />
                }
            </div>
            {
                !isEmpty && (
                    <div>
                        <div className={styles.totalPrice}>
                            <div>
                                Total price
                            </div>
                            <div>
                                {formatCurrency(cartData?.subTotal ?? 0)}
                            </div>
                        </div>

                        <div >
                            <Link href='/information'>
                                <Button className={styles.btnCheckout}>Proceed to checkout</Button>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}