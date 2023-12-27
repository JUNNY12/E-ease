import { UseLocalCartContextType } from "@/context/cart/LocalCartContext";
import { LocalCartContext } from "@/context/cart/LocalCartContext";
import { useContext } from "react";

export const useLocalCart = (): UseLocalCartContextType => {
    const context = useContext(LocalCartContext);
    if (context === undefined) {
        throw new Error("useLocalCart must be used within a CartProvider");
    }
    return context;
};