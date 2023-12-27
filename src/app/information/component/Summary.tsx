'use client'
import Item from "./Item";
import styles from '../styles/information.module.scss';
import { formatCurrency } from "@/lib/utils/formatCurrency";
import { Typography } from "@/sharedComponents/Typography/Typography";
import SummaryTopHeader from "./SummaryTopHeader";
import { useState, useEffect } from 'react';
import { useWidth } from "@/hooks/width/useWidth";
import { useLocalCart } from "@/hooks/cart/useLocalCart";
import { useClient } from "@/hooks/useClient";

export default function Summary() {
    const width = useWidth();
    const [show, setShow] = useState<boolean>(width > 992);
    const { state: { cart } } = useLocalCart();
    const isClient = useClient()

    const handleClick = () => {
        setShow(prevShow => !prevShow);
    }

    return (
        <div className={styles.summaryContainer}>
            <SummaryTopHeader show={show} handleClick={handleClick} />
            {
                isClient && (
                    <div className={`${styles.itemsWrap} ${!show && width <= 992 ? styles.hideContent : ''}`}>
                        {
                            cart?.items?.map((item, i) => {
                                return <Item key={i} item={item} />;
                            })
                        }
                        <div>
                            <div className={styles.subtotal}>
                                <Typography variant={4}>Subtotal</Typography>
                                <p>{formatCurrency(cart?.subTotal ?? 0)}</p>
                            </div>

                            {/* <div className={styles.shipping}>
                                <Typography variant={4}>Shipping</Typography>
                                <p>{formatCurrency(4.40)}</p>
                                </div>  
                            */}

                            <div className={styles.total}>
                                <Typography variant={4}>Total</Typography>
                                <p>{formatCurrency(cart?.subTotal ?? 0)}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
