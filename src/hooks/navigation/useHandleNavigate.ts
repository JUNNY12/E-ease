import {useContext} from 'react'
import { HandleToggleContext } from '@/context/toggle/HandleToggleHeaderContext'
import { HandleToggleContextType } from '@/context/toggle/HandleToggleHeaderContext'

export default function useHandleToggleCart(): HandleToggleContextType {
    const context = useContext(HandleToggleContext)

    if (!context) {
        throw new Error('useHandleToggleCart must be used within a HandleCartProvider')
    }   

    return context
}