'use client'
import Link from "next/link"
import styles from "../../styles/product.module.scss"
import Product from "./Product"
import { Search } from "./Search"
import { Button } from "@/sharedComponents/Button/Button"
import { useProductContext } from "@/hooks/product/useProductContext"
import { ProductLoader } from "@/sharedComponents/Skeleton Loader/ProductLoader"
export default function ProductLists() {
    const {products, performSearch, isLoading} = useProductContext()
    
    return (
        <section>
            <div className={styles.btnWrap}>
                <Link href="/dashboard/products/add-product">
                    <Button className={styles.addBtn} title="Add product">Add Product</Button>
                </Link>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.flexWrapper}>
                    <div className={styles.searchWrapper}>
                        <Search />
                        <Button onClick={performSearch}>Search</Button>
                    </div>
                    <div className={styles.flexHeader}>
                        <div className={styles.col_1}>S/N</div>
                        <div className={styles.col_2}>Image</div>
                        <div className={styles.col_3}>Name</div>
                        <div className={styles.col_4}>Price</div>
                        <div className={styles.col_5}>Category</div>
                        <div className={styles.col_6}>Qty</div>
                        <div className={styles.col_7}>Actions</div>
                    </div>

                    <div>
                        {
                            products?.slice(0, 10).map((book:Product, index:number) => {
                                return (
                                    <Product key={index} book={book} index={index} />
                                )
                            })
                        }
                    </div>
                    {
                        isLoading && [...Array(10)].map((_, i) =>{
                            return(
                                <div key={i}>
                                    <ProductLoader />
                                </div>
                            )
                        } )
                    }
                </div>
            </div>
        </section>
    )
}