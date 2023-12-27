import { useContext } from "react"
import { ServerCartContext } from "@/context/cart/ServerCartContext"

export const useServerCartContext = () => {
    const context = useContext(ServerCartContext)
    if (context === undefined) {
        throw new Error("useServerCartContext must be used within a ServerCartProvider")
    }

    return context
}