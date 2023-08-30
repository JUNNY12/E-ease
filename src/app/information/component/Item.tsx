import styles from '../styles/information.module.scss'
import Image from "next/image"
import { Typography } from "@/sharedComponents/Typography/Typography"
import { formatCurrency } from "@/lib/utils/formatCurrency"

export default function Item() {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.column1}>
                <div className={styles.imageWrap}>
                    <div className={styles.quantity}>3</div>
                    <Image src='/images/image2.jpg' width={80} height={80} alt="cart" />
                </div>
                <div className={styles.title}>
                    <Typography variant={2}>
                        Lorem Ipsum
                    </Typography>

                    <p>Fiction</p>
                </div>
            </div>
            <div className={styles.price}>
                <div>
                    {formatCurrency(30)}
                </div>
            </div>
        </div>
    )
}