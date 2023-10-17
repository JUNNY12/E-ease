interface Item {
    productId?: string;
    quantity?: number;
    price?: number;
    total?: number;
}

interface Cart {
    userId?: string | undefined ;
    items: Item[];
    subTotal: number | undefined;
}

interface CartState {
    cart: Cart | null;
}



const CartActionTypes = {
    ADD_TO_CART : 'ADD_TO_CART',
    REMOVE_FROM_CART : 'REMOVE_FROM_CART',
    UPDATE_QUANTITY : 'UPDATE_QUANTITY',
    CLEAR_CART : 'CLEAR_CART',
}



interface CartAction {
    type: CartActionTypes;
    payload?: Item | undefined ;
}