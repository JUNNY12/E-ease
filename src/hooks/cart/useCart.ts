import { UseCartContextType } from "@/context/cart/CartContext";
import { CartContext } from "@/context/cart/CartContext";
import { useContext } from "react";

export const useCart = (): UseCartContextType => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};