"use client"
import { createContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useAxiosPrivate } from "@/hooks/auth/useAxiosPrivate";
import { base_URL } from "@/lib/constants/baseUrl";



interface ServerCartContextType {
    data: ServerCart,
    isLoading: boolean,
    isFetched: boolean,
}

const ServerCartContextState = {
    data:{
        items: [],
        subTotal: 0,
        userId: '',
    },
    isLoading: false,
    isFetched: false,
}

export const ServerCartContext = createContext<ServerCartContextType>(ServerCartContextState)

type ChildrenType = {
    children: React.ReactNode
}

export const ServerCartProvider = ({ children }: ChildrenType) => {
    const axiosPrivate = useAxiosPrivate()
    const { data: user, status } = useSession()
    const userId = user?.user.userInfo?._id
    const { data, isLoading, isFetched } = useQuery({
        queryKey: ['cart'],
        queryFn: () => fetchCart(),
        enabled: status === 'authenticated',
    })
    
    async function fetchCart() {
        try {
            const res = await axiosPrivate.get(`${base_URL}/carts/${userId}`)
            return res.data.cart
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <ServerCartContext.Provider value={{ data, isFetched, isLoading}}>
            {children}
        </ServerCartContext.Provider>
    )
}



