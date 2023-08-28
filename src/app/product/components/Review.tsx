import styles from '../styles/product.module.scss'
import { Typography } from "@/sharedComponents/Typography/Typography"
import { Rating } from "@/sharedComponents/Rating/Rate"
import { formatDate } from '@/lib/utils/formatDate'

const reviews = [
    {
        id: 1,
        date: '2011-10-10T14:48:00',
        name: 'John Doe',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.'
    },
    {
        id: 2,
        name: 'John Doe',
        date: '2011-10-10T14:48:00',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.'
    },
    {
        id: 3,
        name: 'John Doe',
        date: '2011-10-10T14:48:00',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.'
    }
]



export default function Review() {
    return (
        <div>
            <Typography variant={2} className={styles.reviewHeader}>
                Reviews
            </Typography>

            <article>
                {reviews.map(review => (
                    <div key={review.id} className={styles.review}>
                        <div>
                            <div className={styles.topReviewHeader}>
                                <div>
                                    <Typography variant={3} className={styles.reviewer}>
                                        {review.name}
                                    </Typography>
                                </div>
                                <div className={styles.reviewDate}>
                                    {formatDate(review.date)}
                                </div>
                            </div>
                            <p>
                                {review.review}
                            </p>
                            <div>
                                <span>
                                    <Rating rating={review.rating} />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </article>
        </div>
    )
}