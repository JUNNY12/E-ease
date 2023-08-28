'use client'
import styles from '../styles/product.module.scss';
import { Input } from "@/sharedComponents/Input/Input";
import { Typography } from "@/sharedComponents/Typography/Typography";
import { ChangeEvent, useState } from "react";
import { SelectRating } from "@/sharedComponents/Rating/SelectRating";
import { Button } from "@/sharedComponents/Button/Button";

type formData = {
    name: string,
    email: string,
    message: string,
    rating: number
}

export default function AddReviewForm() {

    const [formData, setFormData] = useState<formData>({
        name: '',
        email: '',
        message: '',
        rating: 0
    })

    const canSubmit = formData.name !== '' && formData.email !== '' && formData.message !== '' && formData.rating !== 0;

    const handleRateClick = (rating: number) => {
        setFormData({
            ...formData,
            rating: rating
        })
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }


    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData)
        
        setFormData({
            name: '',
            email: '',
            message: '',
            rating: 0
        })
    }

    return (
        <div>
            <Typography variant={3} className={styles.addReviewHeader}>Add a review</Typography>

            <form action="" onSubmit={handleSubmit}>

                <div>
                    <Input placeholder='name' className={styles.input} name='name' value={formData.name} onChange={handleInputChange} type="text" />
                </div>

                <div>
                    <Input placeholder='email' className={styles.input} name='email' value={formData.email} onChange={handleInputChange} type="email" />
                </div>

                <div>
                    <textarea className={styles.textarea} name="message" value={formData.message} onChange={handleInputChange} placeholder="Add your review" />
                </div>

                <div className={styles.inputWrapper}>
                    <SelectRating onRateClick={handleRateClick} />
                </div>

                <div>
                    {canSubmit && (
                        <Button className={styles.addReviewButton}>
                            <span>
                                Add review
                            </span>
                        </Button>
                    )}
                </div>

            </form>
        </div>
    )
}