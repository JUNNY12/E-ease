import styles from './product.module.scss'
import { Typography } from "@/sharedComponents/Typography/Typography";

type Props = {
  details: Partial<Product>
}
export default function BookDetails({details}:Props) {

  return (
    <div>
      <Typography variant={2} className={styles.detailHeader}>
        Book Details
      </Typography>

      <div>

        <div className={styles.detail}>
          <span> Pages: </span>
          <span> {details?.pageNumber} </span>
        </div>

        <div className={styles.detail}>
          <span>Language: </span>
          <span> {details?.language} </span>
        </div>

        <div className={styles.detail}>
          <span> Realeased: </span>
          <span> {details?.yearOfRelease} </span>
        </div>

        <div className={styles.detail}>
          <span> Publisher: </span>
          <span> {details?.publisher} </span>
        </div>

        <div className={styles.detail}>
          <span> Category: </span>
          <span> {details?.category} </span>
        </div>

      </div>
    </div>
  )
}