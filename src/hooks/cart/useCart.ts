'use client'
import { useLocalCart } from "./useLocalCart";
import { useServerCartContext } from "./useServerCartContext";
import { useSession } from "next-auth/react";
import { useServerCartMutation } from "./useServerCartMutation";
import { useEffect } from "react";

//hook to manage the server and local cart
export const useCart = () => {
    const { status } = useSession()
    const { state: { cart }, addTocart, removeFromCart, decreaseQuantity } = useLocalCart()
    const { addToCartMutation,
        removeFromCartMutation,
        updateServerCartMutation,
        deleteSingleItemFromCartMutation
    } = useServerCartMutation()
    const { data } = useServerCartContext()
    //TODO fix update local cart to server cart
    // useEffect(() => {
    //     if (status === "authenticated") {
    //         updateServerCartMutation.mutate(cart)
    //     }
    // }, [data, status])

    let newCart;

    function handleAddToCart(payload: any) {
        if (status === "authenticated") {
            addToCartMutation.mutate(payload)
        }
        else {
            addTocart(payload)
        }
    }

    function handleDecreaseItem(payload: any) {
        if (status === "authenticated") {
            const { productId } = payload
            removeFromCartMutation.mutate({ itemId: productId })
        }
        else {
            decreaseQuantity(payload)
        }
    }

    function handleRemoveFromCart(payload: any) {
        if (status === "authenticated") {
            const { itemId } = payload
            deleteSingleItemFromCartMutation.mutate({ itemId: itemId })
        }
        else {
            removeFromCart(payload)
        }
    }

    function loadCart(): Cart | ServerCart {
        if (status === "authenticated") {
            newCart = data as ServerCart
            return newCart
        }
        else {
            newCart = cart as Cart
            return newCart
        }
    }
    const cartData = loadCart()

    const isEmpty = cartData?.items?.length === 0

    return {
        cartData,
        isEmpty,
        handleAddToCart,
        removeFromCartMutation,
        addToCartMutation,
        handleDecreaseItem,
        handleRemoveFromCart
    }
}