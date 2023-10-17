import { getReviews } from "@/lib/api/products/getReview";
import { addReview } from "@/lib/api/products/createReview";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { ChangeEvent } from "react";

type formData = {
    name: string,
    email: string,
    comment: string,
    rating: number
}


export const useReview = (productId: string | undefined) => {
    const queryClient = useQueryClient()
    const [loading, setLoading] = useState<boolean>(false)
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['reviews'],
        queryFn: () => getReviews(productId)
    })

    const [formData, setFormData] = useState<formData>({
        name: '',
        email: '',
        comment: '',
        rating: 0
    })

    const createReviewMutaion = useMutation({
        mutationFn: addReview,
        onSuccess: () => {
            queryClient.invalidateQueries(['reviews'], { exact: true })
            console.log('success')
        },

        onError: (error) => {
            console.log(error)
        }
    })

    async function submitReview(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(false)
        createReviewMutaion.mutate({
            productId: productId,
            ...formData
        })
        setFormData({
            name: '',
            comment: '',
            email: '',
            rating: 0
        })
    }

    function handleRateClick(rating: number) {
        setFormData({
            ...formData,
            rating: rating
        })
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const canSubmit = formData.name !== '' && formData.email !== '' && formData.comment !== '' && formData.rating !== 0;

    return {
        handleInputChange,
        handleRateClick,
        formData,
        submitReview,
        data,
        loading,
        isLoading,
        canSubmit
    }

}