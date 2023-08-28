"use client"
import { createContext, useState, useCallback, useMemo, useEffect } from "react";
import { usePathname } from "next/navigation";

export type HandleToggleContextType = {
    toggleCart: boolean,
    toggleMenu: boolean,
    handleOpenCart: () => void,
    handleCloseCart: () => void,
    handleCloseMenu: () => void,
    handleOpenMenu: () => void,
    handleOutsideClick: (e: MouseEvent, ref: React.RefObject<HTMLDivElement>) => void
}

type ChildrenProps = {
    children: React.ReactNode
}

const initialState: HandleToggleContextType = {
    toggleCart: false,
    toggleMenu: false,
    handleOpenCart: () => { },
    handleCloseCart: () => { },
    handleOutsideClick: () => { },
    handleCloseMenu: () => { },
    handleOpenMenu: () => { }
}

export const HandleToggleContext = createContext(initialState)

export function HandleToggleProvider({ children }: ChildrenProps) {
    const [toggleCart, setToggleCart] = useState<boolean>(false)
    const [toggleMenu, setToggleMenu] = useState<boolean>(false)
    const [showOverlay, setShowOverlay] = useState<boolean>(false)

    const pathName = usePathname();

    useEffect(() =>{
        setToggleMenu(false)
        setToggleCart(false)
        setShowOverlay(false)
    }, [pathName])

    
    const handleOpenCart = useCallback(() => {
        setToggleCart(true)
        document.body.style.overflow = 'hidden'
        setShowOverlay(true)
    }, [])

    const handleCloseCart = useCallback(() => {
        setToggleCart(false)
        document.body.style.overflow = 'unset'
        setShowOverlay(false)
    }, [])

    const handleCloseMenu = useCallback(() => {
        setToggleMenu(false)
        document.body.style.overflow = 'unset'
        setShowOverlay(false)
    }
        , [])

    const handleOpenMenu = useCallback(() => {
        setToggleMenu(true)
        document.body.style.overflow = 'hidden'
        setShowOverlay(true)
    }, [])

    const handleOutsideClick = useCallback((e: MouseEvent, ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {

            setToggleCart(false)

            setToggleMenu(false)

            document.body.style.overflow = 'unset'
            setShowOverlay(false)
        }

    }, [])

    const contextValue = useMemo(() => {
        return {
            toggleCart,
            handleOpenCart,
            handleCloseCart,
            handleOutsideClick,
            toggleMenu,
            handleCloseMenu,
            handleOpenMenu
        }
    }, [toggleCart, handleOpenCart, handleCloseCart, handleOutsideClick, toggleMenu, handleCloseMenu, handleOpenMenu])

    const overlayElement = (<div className='overlay'></div>)

    return (
        <HandleToggleContext.Provider value={contextValue}>
            {children}
            {showOverlay && overlayElement}
        </HandleToggleContext.Provider>
    )
}