import styles from "./loader.module.scss"
export const ProductLoader = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
            <div className={styles.loader}></div>
            <div className={styles.loader}></div>
            <div className={styles.loader}></div>
            <div className={styles.loader}></div>
            <div className={styles.loader}></div>
            <div className={styles.loader}></div>
            <div className={styles.loader}></div>
            <div className={styles.loader}></div>
        </div>
    )
}