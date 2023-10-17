'use client'
import styles from '../styles/product.module.scss';
import { Input } from "@/sharedComponents/Input/Input";
import { Typography } from "@/sharedComponents/Typography/Typography";
import { SelectRating } from "@/sharedComponents/Rating/SelectRating";
import { Button } from "@/sharedComponents/Button/Button";
import { useReview } from '@/hooks/product/useReview';
import { BeatLoader } from 'react-spinners';

type Props = {
    productId: string | undefined
}

export default function AddReviewForm({ productId }: Props) {
    const { formData,
        handleInputChange,
        handleRateClick,
        canSubmit,
        submitReview,
        loading
    } = useReview(productId)

    return (
        <div>
            <Typography variant={3} className={styles.addReviewHeader}>Add a review</Typography>

            <form action="" onSubmit={submitReview}>

                <div>
                    <Input placeholder='name' className={styles.input} name='name' value={formData.name} onChange={handleInputChange} type="text" />
                </div>

                <div>
                    <Input placeholder='email' className={styles.input} name='email' value={formData.email} onChange={handleInputChange} type="email" />
                </div>

                <div>
                    <textarea className={styles.textarea} name="comment" value={formData.comment} onChange={handleInputChange} placeholder="Add your review" />
                </div>

                <div className={styles.inputWrapper}>
                    <SelectRating onRateClick={handleRateClick} />
                </div>

                <div>
                    {canSubmit && (
                        <Button className={styles.addReviewButton}>
                            <span>
                                {
                                    loading ? (<BeatLoader size={10} color='white' />)
                                        : ('Submit review')
                                }
                            </span>
                        </Button>
                    )}
                </div>

            </form>
        </div>
    )
}