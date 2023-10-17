"use client"
import { createContext, useState , useEffect} from "react"
import { usePathname } from "next/navigation"


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
    forwardRef?: React.RefObject<HTMLDivElement> | null
}

const initialState: DashboardToggleContextType = {
    showSideBar: true,
    handleShowSideBar: () => { },
    handleCloseSideBar: () => { },
    showDropDown: false,
    handleShowDropDown: () => { },
    handleOutsideClick: () => { }
}

export const DashboardToggleContext = createContext(initialState)


export function DashboardToggleProvider({ children, forwardRef }: ChildrenProps) {
    const [showSideBar, setShowSideBar] = useState<boolean>(true)
    const [showDropDown, setShowDropDown] = useState<boolean>(false)
    const [showOverlay, setShowOverlay] = useState<boolean>(false)
    const pathname = usePathname()
    

    useEffect(() => {
        setShowSideBar(false)
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