import BookDetails from "./BookDetails"
import AuthorDetails from "./AuthorDetails"
import styles from './product.module.scss'

type Props  = {
    product:Product
}
export default function MoreDetails({product}:Props) {

    const {pageNumber, description, language, yearOfRelease, publisher, category, author} = product

    const otherDetails ={
        pageNumber,
        description,
        language,
        yearOfRelease,
        publisher,
        category
    }

    const authorDetail = author

    return (
        <div className={styles.moreDetails}>
            <BookDetails details ={otherDetails} />
            <AuthorDetails author={authorDetail} />
        </div>
    )
}