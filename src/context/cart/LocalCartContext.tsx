"use client"
import { createContext } from "react";
import { useLocalCartContext } from "@/hooks/cart/useLocalCartContext";

export type UseLocalCartContextType = ReturnType<typeof useLocalCartContext>
export const CartActionTypes = {
    ADD_TO_CART: 'ADD_TO_CART',
    DECREASE_QUANTITY: 'DECREASE_QUANTITY',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
}
const initialCartContextState: UseLocalCartContextType = {
    addTocart: () => { },
    removeFromCart: () => { },
    decreaseQuantity: () => { },
    checkInCart: (productId: string | undefined) => false,
    state: {
        cart: {
            items: [],
            subTotal: 0,
            userId: '',
        },
    }
}

export const LocalCartContext = createContext<UseLocalCartContextType>(initialCartContextState)

type ChildrenType = {
    children: React.ReactNode
}
export const LocalCartProvider = ({ children }: ChildrenType) => {
    const savedCart = typeof window !== "undefined" ? window.localStorage.getItem("cart") : null;
    const { state, addTocart, removeFromCart, checkInCart, decreaseQuantity } = useLocalCartContext({
        cart: savedCart ? JSON.parse(savedCart) : initialCartContextState.state.cart
    })

    return (
        <LocalCartContext.Provider value={{ state, addTocart, removeFromCart, checkInCart, decreaseQuantity }}>
            {children}
        </LocalCartContext.Provider>
    )
}