import styles from '../styles/product.module.scss'
import { Typography } from "@/sharedComponents/Typography/Typography";

export default function AuthorDetails() {
  return (
    <div>
      <Typography variant={2} className={styles.detailHeader}>
        About the author
      </Typography>

      <Typography variant={3} className={styles.authorHeader} >
        lorem ipsum
      </Typography>

      <p className={styles.authorPara}>
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Cupiditate eos laudantium
        eius ad? Maiores consectetur facere, incidunt
        doloremque cum quo sequi id illum tempore placeat
        amet itaque enim architecto fugiat facilis
        voluptatem autem vel aspernatur.
        Rem accusantium laudantium voluptatum
        labore autem consectetur fugit nostrum

      </p>
    </div>
  )
}