import styles from "../styles/dashboard.module.scss"
import Image from "next/image"
import books from "@/data/products"
import { formatCurrency } from "@/lib/utils/formatCurrency"
export default function Item() {
    return (
        <div>
            {
                books.slice(0, 5).map((book, index) => {
                    return (
                        <div className={styles.flexProduct} key={index}>
                            <div className={styles.col_1}>{index + 1}.</div>
                            <div className={styles.col_2}>
                                <Image src={`/images/image2.jpg`} width={40} height={40} alt={book.name} />
                            </div>
                            <div className={styles.col_3}>{book.name}</div>
                            <div className={styles.col_4}>{formatCurrency(book.price)}</div>
                            <div className={styles.col_5}>{book.category}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}