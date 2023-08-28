import { Typography } from "@/sharedComponents/Typography/Typography"
import BookDetails from "./BookDetails"
import AuthorDetails from "./AuthorDetails"
import styles from '../styles/product.module.scss'

export default function MoreDetails() {
    return (
        <div className={styles.moreDetails}>
            <BookDetails />
            <AuthorDetails />
        </div>
    )
}