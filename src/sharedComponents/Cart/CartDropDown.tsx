"use client"
import { Button } from '../Button/Button'
import { Typography } from '../Typography/Typography'
import styles from './cart.module.scss'
import useHandleToggle from '@/hooks/toggle/useToggleHeader'
import { useEffect, useRef } from 'react'
import EmptyCart from './EmptyCart'



export default function CartDropDown() {
    const { handleCloseCart, handleOutsideClick, toggleCart } = useHandleToggle()
    const ref = useRef<HTMLDivElement>(null)

    if (toggleCart) {
        ref.current?.classList.toggle('cart-open')
    }

    useEffect(() => {
        document.addEventListener('click', (e) => handleOutsideClick(e, ref))
        return () => {
            document.removeEventListener('click', (e) => handleOutsideClick(e, ref))
        }
    }, [toggleCart])

    return (
        <div ref={ref} className={styles.cartContainer}>
            <div className={styles.topHeader}>
                <Typography variant={2}>
                    My Cart
                </Typography>
                <Button className={styles.closeButton} onClick={handleCloseCart} title='close cart' >X</Button>
            </div>

            <div>
                <EmptyCart />
            </div>
        </div>
    )
}