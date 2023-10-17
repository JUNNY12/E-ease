import { useContext } from 'react'
import { HandleToggleContext } from '@/context/toggle/HandleToggleContext'

export default function useHandleToggle() {
    const context = useContext(HandleToggleContext)

    if (!context) {
        throw new Error('useHandleToggle must be used within a HandleToggleProvider')
    }

    const {
        toggleCart,
        handleOpenCart,
        handleCloseCart,
        handleOutsideClick,
        toggleMenu,
        handleCloseMenu,
        handleOpenMenu,
        toggleAccount,
        handleToggleAccount
    } = context

    return {
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

}