import { cartReducer } from "@/reducer/cart/cartReducer"
import { useReducer, useMemo } from "react"
import { CartActionTypes } from "@/context/cart/CartContext"
export const useCartContext = (initialCartState: CartState) => {
    const [state, dispatch] = useReducer(cartReducer, initialCartState)

    const REDUCER_ACTIONS = useMemo(() => {
        return CartActionTypes
    }, [])

    const addTocart = (payload:Item) => {
        dispatch({ type: REDUCER_ACTIONS.ADD_TO_CART, payload })
    }

    const removeFromCart = (payload:Item) => {
        dispatch({ type: REDUCER_ACTIONS.REMOVE_FROM_CART, payload })
    }

    const updateQuantity = (payload:Item) => {
        dispatch({ type: REDUCER_ACTIONS.UPDATE_QUANTITY, payload })
    }

    const decreaseQuantity = (payload:Item) => {
        dispatch({ type: REDUCER_ACTIONS.DECREASE_QUANTITY, payload })
    }

    const checkInCart = (productId:any) => {
        return state.cart?.items?.some(item => item.productId === productId) || false
    }

    return { state, addTocart, removeFromCart, updateQuantity , checkInCart, decreaseQuantity }
}
