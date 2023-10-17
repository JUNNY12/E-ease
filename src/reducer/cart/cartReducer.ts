import { CartActionTypes } from "@/context/cart/CartContext";
export const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART: {
            const existingItem = state.cart?.items?.find(item => item.productId === action.payload?.productId);
            if (existingItem) {
                console.log('true')
                existingItem.quantity = (existingItem.quantity ?? 0) + 1;
                existingItem.total = existingItem.quantity * (existingItem.price ?? 0);
            } else {
                const newCartItem: Item = {
                    ...action.payload,
                    quantity: 1,
                    total: action.payload!.price
                };
                state.cart?.items?.push(newCartItem);
            }
            const newCart: Cart = {
                userId: state.cart?.userId ?? "",
                items: state.cart?.items ?? [],
                subTotal: (state.cart?.subTotal ?? 0) + (action.payload!.price ?? 0),
            };
            localStorage.setItem("cart", JSON.stringify(newCart));
            return {
                ...state,
                cart: newCart,
            };
        }

        case CartActionTypes.REMOVE_FROM_CART: {
            const productIdToRemove = action.payload!.productId;
            const newItems = state?.cart?.items?.filter((item) => item.productId !== productIdToRemove);
            const newSubTotal = newItems?.reduce((acc, item) => acc + (item.total ?? 0), 0) || 0;

            const newCart: Cart = {
                userId: state?.cart?.userId ?? "",
                items: newItems as Item[],
                subTotal: newSubTotal,
            };
            localStorage.setItem("cart", JSON.stringify(newCart));

            return {
                ...state,
                cart: newCart,
            };
        }

        case CartActionTypes.DECREASE_QUANTITY: {
            const productIdToDecrease = action.payload!.productId;
            const existingItem = state.cart?.items?.find(item => item.productId === productIdToDecrease);
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    const newItems = state.cart?.items?.filter((item) => item.productId !== productIdToDecrease);
                    const newCart: Cart = {
                        userId: state?.cart?.userId ?? "",
                        items: newItems as Item[],
                        subTotal: newItems?.reduce((acc, item) => acc + (item.total ?? 0), 0) || 0,
                    };
                    localStorage.setItem("cart", JSON.stringify(newCart));
                    return {
                        ...state,
                        cart: newCart,
                    };
                } else {
                    existingItem.quantity = (existingItem.quantity ?? 0) - 1;
                    existingItem.total = existingItem.quantity * (existingItem.price ?? 0);
                    const newCart: Cart = {
                        ...state.cart,
                        items: state.cart?.items?.map(item => {
                            if (item?.productId === productIdToDecrease) {
                                return existingItem;
                            }
                            return item;
                        }) as Item[],
                        subTotal: state.cart?.items?.reduce((acc, item) => {
                            return acc + ((item?.price ?? 0) * (item?.quantity ?? 0));
                        }, 0),
                    };
                    localStorage.setItem("cart", JSON.stringify(newCart));
                    return {
                        ...state,
                        cart: newCart,
                    };
                }
            } else {
                return state;
            }
        }


        case CartActionTypes.UPDATE_QUANTITY: {
            const existingItem = state.cart?.items?.find(item => item?.productId === action.payload?.productId);
            if (existingItem) {
                existingItem.quantity = (existingItem.quantity ?? 0) + 1;
                existingItem.total = existingItem.quantity * (existingItem.price ?? 0);
            }

            const newCart: Cart = {
                ...state.cart,
                items: state.cart?.items?.map(item => {
                    if (item?.productId === action.payload?.productId) {
                        return existingItem;
                    }
                    return item;
                }) as Item[],
                subTotal: state.cart?.items?.reduce((acc, item) => {
                    return acc + ((item?.price ?? 0) * (item?.quantity ?? 0));
                }, 0)
            };
            localStorage.setItem("cart", JSON.stringify(newCart));
            return {
                ...state,
                cart: newCart
            };
        }

        case CartActionTypes.CLEAR_CART: {
            return {
                ...state,
                cart: null,
            };
        }
        default: {
            return state;
        }
    }
}