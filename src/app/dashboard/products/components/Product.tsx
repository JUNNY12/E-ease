'use client'
import styles from "../../styles/product.module.scss"
import Image from "next/image"
import { formatCurrency } from "@/lib/utils/formatCurrency"
import { FaEye, FaEdit, FaTrash } from "react-icons/fa"
import Link from "next/link"
import slugify from "slugify"
import { Modal } from "@/sharedComponents/Modal/Modal"
import { useDeleteProduct } from "@/hooks/product/useDeleteProduct"


type ProductProps = {
    book: Product,
    index: number
}
export default function Product({ book, index }: ProductProps) {
    const { handleDeleteProduct, isOpen, closeModal, openModal } = useDeleteProduct(book?._id, book?.image.public_id)

    const slug = slugify(book?.slug ?? '', { lower: true });

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                onDelete={handleDeleteProduct}
            >
                <p>
                    Do you really want to delete this product?
                    This action cannot be undone.
                </p>
            </Modal>
            <div className={styles.flexProduct}>
                <div className={styles.col_1}>{index + 1}.</div>
                <div className={styles.col_2}>
                    <Image src={book?.image.url ?? ''} width={40} height={40} alt={book?.title ?? ''} />
                </div>
                <div className={styles.col_3}>{book?.title}</div>
                <div className={styles.col_4}>{formatCurrency(book?.price ?? 0)}</div>
                <div className={styles.col_5}>{book?.category}</div>
                <div className={styles.col_6}>{book?.quantity}</div>
                <div className={styles.col_7}>
                    <div className={styles.actions}>

                        <div className={styles.action} title="View details" role="button" >
                            <Link href={`/dashboard/products/${slug}`}>
                                <FaEye />
                            </Link>
                        </div>

                        <div className={styles.action} title='Edit' role="button">
                            <Link href={`/dashboard/products/edit-product/${slug}`}>
                                <FaEdit />
                            </Link>
                        </div>

                        <div
                            onClick={openModal}
                            className={styles.action} title='delete' role='button'>
                            <FaTrash />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}