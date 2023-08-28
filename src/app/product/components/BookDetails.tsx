import styles from '../styles/product.module.scss'
import { Typography } from "@/sharedComponents/Typography/Typography";

export default function BookDetails() {

  return (
    <div>
      <Typography variant={2} className={styles.detailHeader}>
        Book Details
      </Typography>

      <div>

        <div className={styles.detail}>
          <span> Pages: </span>
          <span> 500 </span>
        </div>

        <div className={styles.detail}>
          <span>Language: </span>
          <span> English </span>
        </div>

        <div className={styles.detail}>
          <span> Realeased: </span>
          <span> 2021 </span>
        </div>

        <div className={styles.detail}>
          <span> Publisher: </span>
          <span> lorem ipsum</span>
        </div>

        <div className={styles.detail}>
          <span> Genre: </span>
          <span> Fiction </span>
        </div>

      </div>
    </div>
  )
}