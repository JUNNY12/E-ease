import { ProductProvider } from "@/context/product/ProductContext"
export default function ProductLayout({ children }: { children: React.ReactNode }) {
    return (
        <ProductProvider>
            {children}
        </ProductProvider>
    )
}