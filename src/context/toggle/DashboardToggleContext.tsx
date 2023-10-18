"use client"
import { createContext, useState , useEffect} from "react"
import { usePathname} from "next/navigation"
import { useWidth } from "@/hooks/width/useWidth"


export type DashboardToggleContextType = {
    showSideBar: boolean,
    handleShowSideBar: () => void,
    handleCloseSideBar: () => void,
    showDropDown: boolean,
    handleShowDropDown: () => void
    handleOutsideClick: (e: MouseEvent, ref: React.RefObject<HTMLDivElement>) => void
}

type ChildrenProps = {
    children: React.ReactNode,
}

const initialState: DashboardToggleContextType = {
    showSideBar: false,
    handleShowSideBar: () => {},
    handleCloseSideBar: () => {},
    showDropDown: false,
    handleShowDropDown: () => {},
    handleOutsideClick: () => {}
}

export const DashboardToggleContext = createContext(initialState)
export function DashboardToggleProvider({ children}: ChildrenProps) {
    const [showSideBar, setShowSideBar] = useState<boolean>(false)
    const [showDropDown, setShowDropDown] = useState<boolean>(false)
    const [showOverlay, setShowOverlay] = useState<boolean>(false)
    const pathname = usePathname()
    const width = useWidth()

    useEffect(() => {
        setShowSideBar(width <= 1024)
    }, [width])

    useEffect(() => {
        setShowSideBar(!showSideBar)
    }, [pathname])

    const handleShowSideBar = () => {
        setShowSideBar(prev => !prev)
    }

    const handleShowDropDown = () => {
        setShowDropDown(prev => !prev)
    }

    const handleCloseSideBar = () => {
        setShowSideBar(false)
        setShowOverlay(false)
        
    }

    const handleOutsideClick = (e: MouseEvent, ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            setShowDropDown(false)
            setShowSideBar(false)
        }
    }

    const overlayElement = (<div className='overlay'></div>)

    return (
        <DashboardToggleContext.Provider value={{
            showSideBar,
            handleShowSideBar,
            showDropDown,
            handleShowDropDown,
            handleOutsideClick,
            handleCloseSideBar
        }}>
            {children}
            {showOverlay && overlayElement}
        </DashboardToggleContext.Provider>
    )
}