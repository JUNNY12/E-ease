'use client'
import { getProducts } from "@/lib/api/products/getProducts";
import { createContext, useEffect, useState } from "react";
import { useQuery, } from "@tanstack/react-query";

const initialState = {
    products: [],
    query: '',
    handleInputChange: () => { },
    performSearch: () => { },
    isLoading:false
};

interface ProductContextProps {
    products: Product[];
    query: string;
    isLoading:boolean;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    performSearch: () => void;
}

export const ProductContext = createContext<ProductContextProps>(initialState);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const { data, isLoading, isSuccess } = useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: () => getProducts(query)
    })

    const [products, setProducts] = useState<Product[]>([])

    const [query, setQuery] = useState<string>('')

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    useEffect(() => {
        const search = new URLSearchParams()
        search.set('query', query)
        window.history.replaceState(null, '', `?${search.toString()}`)
        console.log(search.get('query'))
    }, [query])

    useEffect(() => {
        if (data && isSuccess) {
            setProducts(data)
        }
    }, [data, isSuccess])

    const performSearch = async () => {
        try {
            const products = await getProducts(query)
            console.log(products)
            if (products) setProducts(products)
        }
        catch (err) {
            console.log(err)
        }
    };

    return (
        <ProductContext.Provider value={{ products, query, handleInputChange, performSearch , isLoading}}>
            {children}
        </ProductContext.Provider>
    )
}


