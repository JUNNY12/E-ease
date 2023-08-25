import {useContext} from 'react'
import { HandleToggleContextType } from '@/context/toggle/HandleToggleHeaderContext'
import { HandleToggleContext } from '@/context/toggle/HandleToggleHeaderContext'

export default function useHandleToggle(): HandleToggleContextType {
    const context = useContext(HandleToggleContext)

    if (!context) {
        throw new Error('useHandleToggle must be used within a HandleToggleProvider')
    }   

    return context
}