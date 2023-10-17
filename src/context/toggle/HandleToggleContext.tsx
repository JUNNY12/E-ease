"use client"
import { createContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export type HandleToggleContextType = {
    toggleCart: boolean,
    toggleMenu: boolean,
    toggleAccount: boolean,
    handleOpenCart: () => void,
    handleCloseCart: () => void,
    handleCloseMenu: () => void,
    handleOpenMenu: () => void,
    handleToggleAccount: () => void,
    handleOutsideClick: (e: MouseEvent, ref: React.RefObject<HTMLDivElement>) => void
}

type ChildrenProps = {
    children: React.ReactNode
}

const initialState: HandleToggleContextType = {
    toggleCart: false,
    toggleMenu: false,
    toggleAccount: false,
    handleOpenCart: () => { },
    handleCloseCart: () => { },
    handleOutsideClick: () => { },
    handleCloseMenu: () => { },
    handleOpenMenu: () => { },
    handleToggleAccount: () => { }
}

export const HandleToggleContext = createContext(initialState)

export function HandleToggleProvider({ children }: ChildrenProps) {
    const [toggleCart, setToggleCart] = useState<boolean>(false)
    const [toggleMenu, setToggleMenu] = useState<boolean>(false)
    const [toggleAccount, setToggleAccount] = useState<boolean>(false)
    const [showOverlay, setShowOverlay] = useState<boolean>(false)

    const pathName = usePathname();

    useEffect(() => {
        setToggleMenu(false)
        setToggleCart(false)
        setShowOverlay(false)
        setToggleAccount(false)
    }, [pathName])


    const handleOpenCart = () => {
        setToggleCart(true)
        document.body.style.overflow = 'hidden'
        setShowOverlay(true)
    }

    const handleCloseCart = () => {
        setToggleCart(false)
        document.body.style.overflow = 'unset'
        setShowOverlay(false)
    }

    const handleCloseMenu = () => {
        setToggleMenu(false)
        document.body.style.overflow = 'unset'
        setShowOverlay(false)
    }


    const handleToggleAccount = () => {
        setToggleAccount(prevState => !prevState)
    }

    const handleOpenMenu = () => {
        setToggleMenu(true)
        document.body.style.overflow = 'hidden'
        setShowOverlay(true)
    }

    const handleOutsideClick = (e: MouseEvent, ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {

            setToggleCart(false)

            setToggleMenu(false)

            setToggleAccount(false)

            document.body.style.overflow = 'unset'
            setShowOverlay(false)
        }

    }

    const contextValue = {
        toggleCart,
        handleOpenCart,
        handleCloseCart,
        handleOutsideClick,
        toggleMenu,
        handleCloseMenu,
        handleOpenMenu,
        toggleAccount,
        handleToggleAccount
    }

    const overlayElement = (<div className='overlay'></div>)

    return (
        <HandleToggleContext.Provider value={contextValue}>
            {children}
            {showOverlay && overlayElement}
        </HandleToggleContext.Provider>
    )
}