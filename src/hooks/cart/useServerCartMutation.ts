import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAxiosPrivate } from "../auth/useAxiosPrivate"
import { base_URL } from "@/lib/constants/baseUrl"
import { useSession } from "next-auth/react"

export const useServerCartMutation = () => {
    const axiosPrivate = useAxiosPrivate()
    const{data:user} = useSession()
    const queryClient = useQueryClient()

    const addToCartMutation = useMutation({
        mutationFn: addItemToCart,
        onSuccess: () => {
            queryClient.invalidateQueries(['cart'], { exact: true })
        },
        onError: () => {
            console.log("Error adding item to cart")
        }
    })

    const removeFromCartMutation = useMutation({
        mutationFn: removeItemFromCart,
        onSuccess: () => {
            queryClient.invalidateQueries(['cart'], { exact: true })
        },
        onError: () => {
            console.log("Error removing item from cart")
        }
    })

    const deleteSingleItemFromCartMutation = useMutation({
        mutationFn: deleteSingleItemFromCart,
        onSuccess: () => {
            queryClient.invalidateQueries(['cart'], { exact: true })
        },
        onError: () => {
            console.log("Error removing item from cart")
        }
    })

    const updateServerCartMutation = useMutation({
        mutationFn: updateServerCart,
        onSuccess: () => {
            queryClient.invalidateQueries(['cart'], { exact: true })
        },
        onError: () => {
            console.log("Error updating cart")
        }
    })



    async function addItemToCart(data: any) {
        try {
            const res = await axiosPrivate.post(`${base_URL}/carts/${user?.user.userInfo?._id}`, data)
            return res.data
        }
        catch (err) {
            console.log(err)
        }
    }

    async function removeItemFromCart(data: any) {
        try {
            const res = await axiosPrivate.post(`${base_URL}/carts/delete/${user?.user.userInfo?._id}`, data)
            return res.data
        }
        catch (err) {
            console.log(err)
        }
    }

    async function deleteSingleItemFromCart(data: any) {
        try {
            const res = await axiosPrivate.post(`${base_URL}/carts/deleteSingleItem/${user?.user.userInfo?._id}`, data)
            return res.data
        }
        catch (err) {
            console.log(err)
        }
    }

    async function updateServerCart(data:any){
        try {
            const res = await axiosPrivate.put(`${base_URL}/carts/${user?.user.userInfo?._id}`, data)
            return res.data
        }
        catch (err) {
            console.log(err)
        }
    }


    return {
        addToCartMutation,
        removeFromCartMutation,
        deleteSingleItemFromCartMutation,
        updateServerCartMutation
    }

}