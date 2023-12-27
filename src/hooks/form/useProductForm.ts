import { useAxiosPrivate } from "../auth/useAxiosPrivate";
import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { base_URL } from "@/lib/constants/baseUrl";


export const useProductForm = (initialState: Product | undefined) => {
    const axiosPrivate = useAxiosPrivate();
    const queryClient = useQueryClient()
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<any>(null)
    const [products, setProducts] = useState<Product>({
        title: '' || initialState?.title,
        description: '' || initialState?.description,
        price: 0 || initialState?.price,
        image: {
            url: '' || initialState?.image.url,
            public_id: '',
            secure_url: '',
            asset_id: '',
        },
        quantity: 0 || initialState?.quantity,
        category: '' || initialState?.category,
        averageRating: 0 || initialState?.averageRating,
        yearOfRelease: 0 || initialState?.yearOfRelease,
        author: {
            authorName: '' || initialState?.author.authorName,
            aboutAuthor: '' || initialState?.author.aboutAuthor,
        },
        publisher: '' || initialState?.publisher,
        pageNumber: 0 || initialState?.pageNumber,
        language: '' || initialState?.language
    });

    //create mutation function for creating product
    const createProductMutation = useMutation({
        mutationFn: createProduct,
        onSuccess: (data) => {
            queryClient.setQueryData(['products', data?._id], data)
            queryClient.invalidateQueries(['products'], { exact: true })
        },
        onError: (error) => {
            console.log(`Error creating product ${error}`)
        }
    })
    //update mutation function for updating product
    const updateProductMutation = useMutation({
        mutationFn: updateProduct,
        onSuccess: (data) => {
            queryClient.setQueryData(['products', data._id], data)
            queryClient.invalidateQueries(['products'], { exact: true })
        },
        onError: (error) => {
            console.log(`Error updating product ${error}`)
        }
    })

    const isValidValue = (value: any) => {
        if (typeof value === 'string') {
            return value.trim() !== '';
        }
        if (typeof value === 'number') {
            return value > 0;
        }
        return false;
    }


    const canSubmit = isValidValue(products.title)
        && isValidValue(products.description)
        && isValidValue(products.price)
        && isValidValue(products.quantity)
        && isValidValue(products.category)
        && isValidValue(products.yearOfRelease)
        && isValidValue(products.author.authorName)
        && isValidValue(products.author.aboutAuthor)
        && isValidValue(products.publisher)
        && isValidValue(products.pageNumber)
        && isValidValue(products.language)
        && ((file && file.size > 0) || (initialState && initialState.image.url))

    const handleSelectFile = (e: any) => {
        setFile(e.target.files[0])
    }

    const handleDragOver = (e: any) => {
        e.preventDefault();
    }

    const handleDrop = (e: any) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setFile(file)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setProducts(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
                author: {
                    ...prev.author,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    const handleFileUpload = async () => {
        try {
            const data = new FormData()
            data.append("my_file", file)
            const res = await axiosPrivate.post(base_URL + '/upload', data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            const imageData = res?.data?.data
            return imageData
        }
        catch (err) {
            console.log(err)
        }

    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>, mode: string) {
        e.preventDefault();
        setLoading(true);

        //switch case for add and edit mode
        switch (mode) {
            case 'add':
                try {
                    const imageData = await handleFileUpload();

                    if (imageData) {
                        products.image.url = imageData?.url
                        products.image.asset_id = imageData?.asset_id
                        products.image.public_id = imageData?.public_id
                        products.image.secure_url = imageData?.secure_url

                        const newProductData = { ...products }
                        createProductMutation.mutate(newProductData)

                        setLoading(false);
                        setProducts({
                            title: '',
                            description: '',
                            price: 0,
                            image: {
                                url: '',
                                public_id: '',
                                secure_url: '',
                                asset_id: '',
                            },
                            quantity: 0,
                            category: '',
                            averageRating: 0,
                            yearOfRelease: 0,
                            author: {
                                authorName: '',
                                aboutAuthor: '',
                            },
                            publisher: '',
                            pageNumber: 0,
                            language: ''
                        })
                        setFile(null)

                    } else {
                        setLoading(false);
                        toast.error('Error uploading image', {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 1000,
                            hideProgressBar: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                } catch (err) {
                    console.log(err);
                    setLoading(false);
                }
                break;
            case 'edit':
                try {
                    //if file is selected
                    setLoading(true);
                    if (file) {
                        await handleDelete();
                        const imageData = await handleFileUpload();


                        if (imageData) {
                            products.image.url = imageData?.url
                            products.image.asset_id = imageData?.asset_id
                            products.image.public_id = imageData?.public_id
                            products.image.secure_url = imageData?.secure_url
                        }
                        else {
                            setLoading(false);
                            toast.error('Error uploading image', {
                                position: toast.POSITION.TOP_CENTER,
                                autoClose: 1000,
                                hideProgressBar: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        }
                    }
                    else {
                        products.image.url = initialState?.image.url || ''
                        products.image.asset_id = initialState?.image.asset_id || ''
                        products.image.public_id = initialState?.image.public_id || ''
                        products.image.secure_url = initialState?.image.secure_url || ''
                    }

                    const newProductData = {
                        ...products,
                    }
                    updateProductMutation.mutate(newProductData)

                    setLoading(false);

                    setProducts({
                        title: '',
                        description: '',
                        price: 0,
                        image: {
                            url: '',
                            public_id: '',
                            secure_url: '',
                            asset_id: '',
                        },
                        quantity: 0,
                        category: '',
                        averageRating: 0,
                        yearOfRelease: 0,
                        author: {
                            authorName: '',
                            aboutAuthor: '',
                        },
                        publisher: '',
                        pageNumber: 0,
                        language: ''
                    })
                    setFile(null)
                } catch (err) {
                    console.log(err);
                    toast.error(`${err}`, {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 1000,
                        hideProgressBar: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                    setLoading(false);
                }
            default:
                return null
        }

    }

    //create product function to be used in mutation function
    async function createProduct(productData: Product) {
        try {
            const res = await axiosPrivate.post(base_URL + '/products', productData);
            console.log(res.data);

            toast.success('Product added successfully', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000,
                hideProgressBar: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

            return res.data
        } catch (err: any) {
            console.log(err?.response?.status);
            if (err?.response?.status === 409) {
                toast.error('Product already exists', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1000,
                    hideProgressBar: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
            else if (err?.response?.status === 500) {
                toast.error('Internal server error', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1000,
                    hideProgressBar: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
            else {
                toast.error(`${err?.response?.statusText}`, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1000,
                    hideProgressBar: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
        }
    }

    //update product function to be used in mutation function
    async function updateProduct(productData: Product) {
        try {
            const res = await axiosPrivate.put(base_URL + '/products', {
                productId: initialState?._id,
                productData: productData,
            });
            toast.success('Product updated successfully', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000,
                hideProgressBar: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            return res.data
        } catch (err: any) {
            console.log(err);
            toast.error(`${err?.response?.statusText}`, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000,
                hideProgressBar: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    // delete product image function
    async function handleDelete() {
        try {
            const res = await axiosPrivate.post(base_URL + `/upload/delete`, {
                public_id: initialState?.image.public_id
            })
            return res.data
        }
        catch (err) {
            console.error(err);
        }

    }

    return {
        handleChange,
        handleSubmit,
        handleSelectFile,
        handleDragOver,
        handleDrop,
        loading,
        products,
        file,
        canSubmit
    }
}