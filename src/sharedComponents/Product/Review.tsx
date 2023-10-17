"use client"
import styles from './product.module.scss'
import { Typography } from "@/sharedComponents/Typography/Typography"
import { Rating } from "@/sharedComponents/Rating/Rate"
import { formatDate } from '@/lib/utils/formatDate'
import { useReview } from '@/hooks/product/useReview'
import { ReviewLoader } from '../Skeleton Loader/ReviewLoader'


type reviewProps = {
    productId: string | undefined
}

export default function Review({ productId }: reviewProps) {
    const { data, isLoading } = useReview(productId)

    return (
        <div>
            <Typography variant={2} className={styles.reviewHeader}>
                Reviews
            </Typography>

            <article>
                {data?.reviews?.length > 0 ? (
                    data?.reviews?.map((review: Review) => (
                        <div key={review._id} className={styles.review}>
                            <div className={styles.topReviewHeader}>
                                <div>
                                    <Typography variant={3} className={styles.reviewer}>
                                        {review.name}
                                    </Typography>
                                </div>
                                <div className={styles.reviewDate}>
                                    {formatDate(review.createdAt)}
                                </div>
                            </div>
                            <p>
                                {review.comment}
                            </p>
                            <div>
                                <span>
                                    <Rating rating={review.rating} />
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className={styles.noReview}>
                        {
                            !isLoading && <span> There are no reviews.</span>
                        }
                    </div>
                )}

                {
                    isLoading && [...Array(5)].map((_, i) => {
                        return (
                            <div key={i}>
                                <ReviewLoader />
                            </div>
                        )
                    })
                }
            </article>
        </div>
    )
}