import styles from "../styles/dashboard.module.scss"
import Item from "./Item"

export default function ProductItems() {
    return (
        <section className={styles.wrapper}>
            <section className={styles.flexWrapper}>
                <div className={styles.flexHeader}>
                    <div className={styles.col_1}>S/N</div>
                    <div className={styles.col_2}>Image</div>
                    <div className={styles.col_3}>Name</div>
                    <div className={styles.col_4}>Price</div>
                    <div className={styles.col_5}>Category</div>
                </div>

                <div>
                    <Item />
                </div>
            </section>
        </section>
    )
}