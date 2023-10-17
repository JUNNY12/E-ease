"use client"

import { createContext} from "react";
import { useCartContext } from "@/hooks/cart/useCartContext";

export type UseCartContextType = ReturnType<typeof useCartContext>
export const CartActionTypes = {
    ADD_TO_CART: 'ADD_TO_CART',
    DECREASE_QUANTITY: 'DECREASE_QUANTITY',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    UPDATE_QUANTITY: 'UPDATE_QUANTITY',
    CLEAR_CART: 'CLEAR_CART',
}
const initialCartContextState: UseCartContextType = {
    addTocart: () => { },
    removeFromCart: () => { },
    decreaseQuantity: () => { },
    updateQuantity: () => { },
    checkInCart:(productId:string| undefined) => false,
    state: {
        cart: {
            items: [],
            subTotal: 0,
            userId: '',
        },
    }
}

export const CartContext = createContext<UseCartContextType>(initialCartContextState)

type ChildrenType = {
    children: React.ReactNode
}
export const CartProvider = ({ children }: ChildrenType) => {
    const savedCart = typeof window !== "undefined" ? window.localStorage.getItem("cart") : null;
    const { state, addTocart, removeFromCart, updateQuantity, checkInCart,decreaseQuantity } = useCartContext({
        cart: savedCart ? JSON.parse(savedCart) : initialCartContextState.state.cart
    })

    return (
        <CartContext.Provider value={{ state, addTocart, removeFromCart, updateQuantity,checkInCart, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    )
}