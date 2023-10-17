import { Typography } from "@/sharedComponents/Typography/Typography"
import styles from "../styles/dashboard.module.scss"
import ProductItems from "./ProductItems"

export default function TopProduct() {
    return (
        <section className={styles.topProduct}>
            <Typography variant={2} className={styles.cardTitle}>
                Top Product
            </Typography>
            <ProductItems />
        </section>
    )
}