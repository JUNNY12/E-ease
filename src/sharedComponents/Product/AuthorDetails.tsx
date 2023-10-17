import styles from './product.module.scss'
import { Typography } from "@/sharedComponents/Typography/Typography";


type Props = {
  author:Partial<Product['author']>
}
export default function AuthorDetails({author}:Props) {
  return (
    <div>
      <Typography variant={2} className={styles.detailHeader}>
        About the author
      </Typography>

      <Typography variant={3} className={styles.authorHeader} >
        {author?.authorName}
      </Typography>

      <p className={styles.authorPara}>{author?.aboutAuthor}</p>
    </div>
  )
}