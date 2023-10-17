import { useState , useEffect} from "react";
import { usePathname } from "next/navigation";

export const useShowDetail = () => {
    const [showDetail, setShowDetail] = useState(false)
    const [isOverlay, setShowOverlay] = useState(false)
    const pathname = usePathname()

    const handleShowDetail = () => {
        setShowDetail(prev => !prev)
        setShowOverlay(prev => !prev)
        document.body.style.overflow = "hidden"
    }

    const handleCloseDetail = () => {
        setShowDetail(false)
        setShowOverlay(false)
        document.body.style.overflow = "unset"
    }

    useEffect(() => {
        setShowDetail(false)
        setShowOverlay(false)
        document.body.style.overflow = "unset"
    }
    , [pathname])

    return {
        showDetail,
        isOverlay,
        handleShowDetail,
        handleCloseDetail
    }

}