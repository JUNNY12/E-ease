import styles from '../styles/checkout.module.scss'
import Link from 'next/link'

export default function ChangeDetails() {
    return (
        <div className={styles.changeDetails}>
            <div className={styles.contact}>
                <div className={styles.flexContent}>
                    <span> Contact: </span>
                    <span> 09032869229 </span>
                </div>
                <div>
                    <Link href={'/information'}>Change</Link>
                </div>
            </div>

            <div className={styles.email}>
                <div className={styles.flexContent}>
                    <span> Email: </span>
                    <span> Juwonemmanuel22@gmail.com </span>
                </div>
                <div>
                    <Link href={'/information'}>Change</Link>
                </div>
            </div>

            <div className={styles.address}>
                <div className={styles.flexContent}>
                    <span> Ship to: </span>
                    <span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, ullam. </span>
                </div>
                <div>
                    <Link href={'/information'}>Change</Link>
                </div>
            </div>
        </div>
    )
}