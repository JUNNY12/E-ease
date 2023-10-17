"use client"
import styles from "../../styles/form.module.scss"
import { Input } from "@/sharedComponents/Input/Input"
import { Button } from "@/sharedComponents/Button/Button"
import { FaFileUpload } from "react-icons/fa"
import Image from "next/image"
import { useProductForm } from "@/hooks/form/useProductForm"
import {BeatLoader} from "react-spinners"
import { collections } from "@/app/search/components/MobileCollection"

type FormProps = {
    mode: "add" | "edit"
    initialState?: Product
}
export default function Form({mode, initialState }:FormProps) {

    const { handleChange,
        handleSelectFile,
        handleSubmit,
        handleDragOver,
        handleDrop,
        loading,
        products,
        canSubmit,
        file } = useProductForm(initialState)

    return (
        <form onSubmit={(e) => handleSubmit(e, mode)} className={styles.form}>
            <div className={styles.grid}>
                <Input
                    className={styles.input}
                    placeholder="Book title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                    value={products.title}
                />

                <Input
                    className={styles.input}
                    placeholder="Price"
                    name="price"
                    type="number"
                    onChange={handleChange}
                    value={products.price == 0 ? '' : products.price}
                />

            </div>

            <div className={styles.grid}>

                <Input
                    className={styles.input}
                    placeholder="Quantity"
                    name="quantity"
                    type="number"
                    onChange={handleChange}
                    value={products.quantity == 0 ? '' : products.quantity}
                />
                <Input
                    className={styles.input}
                    placeholder="year of release"
                    name="yearOfRelease"
                    type="number"
                    onChange={handleChange}
                    value={products.yearOfRelease == 0 ? '' : products.yearOfRelease}
                />
            </div>

            <div className={styles.grid}>
                <Input
                    className={styles.input}
                    placeholder="Publisher"
                    name="publisher"
                    type="text"
                    onChange={handleChange}
                    value={products.publisher}
                />

                <Input
                    className={styles.input}
                    placeholder="Page Number"
                    name="pageNumber"
                    type="number"
                    onChange={handleChange}
                    value={products.pageNumber == 0 ? '' : products.pageNumber }
                />
            </div>
            <div className={styles.grid}>
                <select
                    value={products.category}
                    onChange={handleChange}
                    name="category" id="" className={styles.select}>
                    <option>Choose category</option>
                    {
                        collections.map((collection, index) => (
                            <option key={index} value={collection}>{collection}</option>
                        ))
                    }
                </select>

                <Input
                    className={styles.input}
                    placeholder="Language"
                    name="language"
                    type="text"
                    onChange={handleChange}
                    value={products.language}
                />

            </div>

            <div>
                <Input
                    className={styles.input}
                    placeholder="Author Name"
                    name="authorName"
                    type="text"
                    onChange={handleChange}
                    value={products.author.authorName}
                />
            </div>

            <div>
                <textarea
                    onChange={handleChange}
                    value={products.description}
                    className={styles.textarea}
                    name="description" id="description"
                    placeholder="Book description" />
            </div>

            <div>
                <textarea
                    className={styles.textarea}
                    placeholder="About the author"
                    name="aboutAuthor"
                    onChange={handleChange}
                    value={products.author.aboutAuthor}
                    id="authorDescription" />
            </div>

            <div>
                <label
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className={styles.imageLabel} htmlFor="bookImage">
                    {
                        file ?
                            <>
                                <Image
                                    width={100}
                                    height={100}
                                    src={URL.createObjectURL(file)}
                                    alt="book image"
                                />
                                <span className={styles.fileName}>
                                    {file?.name}
                                </span>
                            </>
                            :
                            initialState?.image?.url ?
                                <>
                                    <Image
                                        width={100}
                                        height={100}
                                        src={initialState?.image?.url}
                                        alt="book image"
                                    />
                                </>
                                :
                            (

                                <>
                                    <span>
                                        <FaFileUpload />
                                    </span>
                                    <span>
                                        Drag & drop a file or click to select one
                                    </span>
                                </>
                            )
                    }
                </label>
                <Input
                    onChange={handleSelectFile}
                    type="file"
                    multiple={false}
                    name="image"
                    id="bookImage"
                    placeholder="Book image"
                    className={styles.imageInput} />
            </div>

            <Button disabled={!canSubmit} className={canSubmit ? styles.button : styles.disabled}>
                {
                    loading ?
                        <BeatLoader
                            color="white"
                            size={10}
                        />
                        :
                        (mode === "add" ? "Add Product" : "Update Product")
                }
            </Button>
        </form>
    )
}