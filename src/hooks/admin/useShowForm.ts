import { useState , useEffect} from "react";
import { usePathname } from "next/navigation";

export const useShowForm = () => {
    const [showForm, setShowForm] = useState(false)
    const [showOverlay, setShowOverlay] = useState(false)
    const pathname = usePathname()

    const handleShowForm = () => {
        setShowForm(prev => !prev)
        setShowOverlay(prev => !prev)
        document.body.style.overflow = "hidden" 
    }

    const handleCloseForm = () => {
        setShowForm(false)
        setShowOverlay(false)
        document.body.style.overflow = "unset"
    }

    useEffect(() => {
        setShowForm(false)
        setShowOverlay(false)
        document.body.style.overflow = "unset"
    }
    , [pathname])

    return {
        showForm,
        showOverlay,
        handleShowForm,
        handleCloseForm
    }

}