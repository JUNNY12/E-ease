import { useAxiosPrivate } from "../auth/useAxiosPrivate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { base_URL } from "@/lib/constants/baseUrl";
import { useModal } from "../modal/useModal";

export const useDeleteProduct = (bookId: string | undefined, publicId: string) => {
    const axiosPrivate = useAxiosPrivate();
    const queryClient = useQueryClient()
    const { isOpen, closeModal, openModal } = useModal()

    const deleteProductMutation = useMutation({
        mutationFn: deleteProduct,
        onSuccess: (data) => {

            if (data?.statusText === "OK") {
                toast.success('Product deleted successfully', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            };
            closeModal();
        
            queryClient.invalidateQueries(['products'], { exact: true })
        },

        onError: (error) => {
            console.log(`Error deleting product ${error}`)
        }
    })


    async function deleteProduct() {
        try {
            if (publicId && bookId) {
                console.log(publicId, bookId)
                const res = await axiosPrivate.post(base_URL + `/products/${bookId}`, {
                    public_id: publicId
                })
                return res
            }

        }
        catch (err) {
            console.error(err);
        }
    }

    const handleDeleteProduct = () => {
        deleteProductMutation.mutate()
    }

    return {
        handleDeleteProduct,
        isOpen,
        closeModal,
        openModal
    }
}