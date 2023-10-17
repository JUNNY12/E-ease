"use client"
import { Input } from "@/sharedComponents/Input/Input";
import styles from "../../styles/product.module.scss";
import { useProductContext } from "@/hooks/product/useProductContext";
export const Search = () => {
    const {query, handleInputChange} =useProductContext()

    return (
        <Input
            value={query}
            className={styles.searchInput}
            type="search"
            onChange={handleInputChange}
            placeholder="Search for products by name or category" />
    )
}