import { CartActionTypes } from "@/context/cart/LocalCartContext";

export const cartReducer = (state: CartState, action: CartAction): CartState => {

    switch (action.type) {
        case CartActionTypes.ADD_TO_CART:
            const itemIndex = state.cart?.items.findIndex(item => item.productId === action.payload?.productId);

            if (itemIndex !== undefined && itemIndex !== -1 && state.cart) {
                // If the item already exists in the cart, update the quantity and total
                const updatedItems = state.cart.items.map((item, index) => {
                    if (index === itemIndex) {
                        const newQuantity = (item.quantity || 0) + 1;
                        const newTotal = newQuantity * (item.price || 0);
                        return {
                            ...item,
                            quantity: newQuantity,
                            total: newTotal,
                        };
                    }
                    return item;
                });
                // Calculate the new subtotal
                const newSubTotal = updatedItems.reduce((total, item) => total + (item.total || 0), 0);

                // Create a new cart object
                const newCart: Cart = {
                    userId: state.cart.userId ?? "",
                    items: updatedItems,
                    subTotal: newSubTotal,
                };

                localStorage.setItem("cart", JSON.stringify(newCart));

                return {
                    ...state,
                    cart: newCart
                };
            } else {
                // If the item does not exist in the cart, add it with quantity 1
                const newItem: Item = {
                    ...action.payload,
                    quantity: 1,
                    total: action.payload?.price,
                };

                // Create a new cart object with the updated items array
                const newCart: Cart = {
                    userId: state.cart?.userId ?? "",
                    items: [...(state.cart?.items ?? []), newItem],
                    subTotal: (state.cart?.subTotal ?? 0) + (action.payload!.price ?? 0),
                };

                localStorage.setItem("cart", JSON.stringify(newCart));

                return {
                    ...state,
                    cart: newCart
                };
            }
        case CartActionTypes.DECREASE_QUANTITY:
            const itemIndexToRemove = state.cart?.items.findIndex(item => item.productId === action.payload?.productId);
            if (itemIndexToRemove !== undefined && itemIndexToRemove !== -1 && state.cart) {
                if (state.cart.items[itemIndexToRemove].quantity === 1) {
                    // If the item has quantity 1, remove it from the cart
                    const newItems = state.cart.items.filter((item, index) => index !== itemIndexToRemove);
                    const newSubTotal = newItems.reduce((total, item) => total + (item.total || 0), 0);
                    const newCart: Cart = {
                        userId: state.cart.userId ?? "",
                        items: newItems,
                        subTotal: newSubTotal,
                    };

                    localStorage.setItem("cart", JSON.stringify(newCart));

                    return {
                        ...state,
                        cart: newCart
                    };
                }
                else {
                    // If the item has quantity greater than 1, decrease the quantity by 1
                    const updatedItems = state.cart.items.map((item, index) => {
                        if (index === itemIndexToRemove) {
                            const newQuantity = (item.quantity || 0) - 1;
                            const newTotal = newQuantity * (item.price || 0);
                            return {
                                ...item,
                                quantity: newQuantity,
                                total: newTotal,
                            };
                        }
                        return item;
                    });
                    // Calculate the new subtotal
                    const newSubTotal = updatedItems.reduce((total, item) => total + (item.total || 0), 0);

                    // Create a new cart object
                    const newCart: Cart = {
                        userId: state.cart.userId ?? "",
                        items: updatedItems,
                        subTotal: newSubTotal,
                    };

                    localStorage.setItem("cart", JSON.stringify(newCart));

                    return {
                        ...state,
                        cart: newCart
                    };
                }
            }
        case CartActionTypes.REMOVE_FROM_CART:
            const itemIndexToRemoveFromCart = state.cart?.items.findIndex(item => item.productId === action.payload?.productId);
            if (itemIndexToRemoveFromCart !== undefined && itemIndexToRemoveFromCart !== -1 && state.cart) {
                const newItems = state.cart.items.filter((item, index) => index !== itemIndexToRemoveFromCart);
                const newSubTotal = newItems.reduce((total, item) => total + (item.total || 0), 0);
                const newCart: Cart = {
                    userId: state.cart.userId ?? "",
                    items: newItems,
                    subTotal: newSubTotal,
                };

                localStorage.setItem("cart", JSON.stringify(newCart));

                return {
                    ...state,
                    cart: newCart
                };
            }

        default: {
            return state;
        }
    }
};
