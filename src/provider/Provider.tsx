"use client"
import { HandleToggleProvider } from "@/context/toggle/HandleToggleContext"
import { SessionProvider } from 'next-auth/react';
import { CartProvider } from "@/context/cart/CartContext";
import { AuthProvider } from "@/context/auth/AuthContext";


type ProviderProps = {
    children: React.ReactNode,
    session: any
}



export default function Provider({ children, session }: ProviderProps) {

    return (
        <>
            <SessionProvider session={session}>
                <AuthProvider>
                    <CartProvider>
                        <HandleToggleProvider>
                            {children}
                        </HandleToggleProvider>
                    </CartProvider>
                </AuthProvider>
            </SessionProvider>
        </>
    )
}