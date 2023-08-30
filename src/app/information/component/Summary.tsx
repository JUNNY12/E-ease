'use client'
import Item from "./Item";
import styles from '../styles/information.module.scss';
import { formatCurrency } from "@/lib/utils/formatCurrency";
import { Typography } from "@/sharedComponents/Typography/Typography";
import SummaryTopHeader from "./SummaryTopHeader";
import { useState, useCallback } from 'react';
import { useWidth } from "@/hooks/width/useWidth";

export default function Summary() {
    const width = useWidth();
    const [show, setShow] = useState<boolean>(width > 992); 
   

    const handleClick = useCallback(() => {
        setShow(prevShow => !prevShow);
    }, []);

    return (
        <div className={styles.summaryContainer}>
            <SummaryTopHeader show={show} handleClick={handleClick} />
            <div className={`${styles.itemsWrap} ${!show && width <= 992 ? styles.hideContent : ''}`}>
                {
                    [...Array(3)].map((_, i) => {
                        return <Item key={i} />;
                    })
                }

                <div>
                    <div className={styles.subtotal}>
                        <Typography variant={4}>Subtotal</Typography>
                        <p>{formatCurrency(30)}</p>
                    </div>

                    <div className={styles.shipping}>
                        <Typography variant={4}>Shipping</Typography>
                        <p>{formatCurrency(4.40)}</p>
                    </div>

                    <div className={styles.total}>
                        <Typography variant={4}>Total</Typography>
                        <p>{formatCurrency(34.40)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
