import { useSession } from "next-auth/react";
import { ServerCartProvider } from "./ServerCartContext";
import { LocalCartProvider } from "./LocalCartContext";


type ChildrenType = {
    children: React.ReactNode
}

export const CartProvider = ({ children }: ChildrenType) => {
    const { status } = useSession()

    if (status === 'authenticated') {
        return <ServerCartProvider>{children}</ServerCartProvider>
    }
    return <LocalCartProvider>{children}</LocalCartProvider>


}

