import { useState , useEffect} from "react";
import { usePathname } from "next/navigation";

export const useUserMenu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showOverlay, setShowOverlay] = useState(false)
    const pathname = usePathname()

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
        setShowOverlay(!showOverlay)
        document.body.style.overflow = "hidden"
    }

    const handleCloseMenu = () => {
        setShowMenu(false)
        setShowOverlay(false)
        document.body.style.overflow = "unset"
    }

    useEffect(() => {
        setShowMenu(false)
        setShowOverlay(false)
        document.body.style.overflow = "unset"
    }
    , [pathname])

    return {
        showMenu,
        showOverlay,
        handleShowMenu,
        handleCloseMenu
    }

}