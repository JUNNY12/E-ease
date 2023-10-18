"use client"
import styles from "../styles/sidebar.module.scss"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BiSolidDashboard, BiUser, BiMoney } from "react-icons/bi"
import { FiSettings } from "react-icons/fi"
import { IoBookSharp } from "react-icons/io5"
import { useToggleDashboard } from "@/hooks/toggle/useToggleDashboard"
import { useWidth } from "@/hooks/width/useWidth"
import { useRef, useEffect } from "react"


const routes = [
    {
        name: 'Dashboard',
        icon: <BiSolidDashboard />,
    },
    {
        name: 'Users',
        icon: <BiUser />,
    },
    {
        name: 'Products',
        icon: <IoBookSharp />,
    },
    {
        name: 'Orders',
        icon: <BiMoney />,
    },
    {
        name: 'Settings',
        icon: <FiSettings />,
    }
]



export default function SideBar() {
    const { showSideBar,handleCloseSideBar, handleOutsideClick } = useToggleDashboard()
    const width = useWidth()

    const ActiveRoute = (route: string) => {
        const pathname = usePathname()
        return pathname === `/dashboard/${route.toLowerCase()}` || (pathname === "/dashboard" && route === "Dashboard")
    }

    const Ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.addEventListener('click', (e) => handleOutsideClick(e, Ref))
        return () => {
            document.removeEventListener('click', (e) => handleOutsideClick(e, Ref))
        }
    }, [])


    return (
        <aside className={!showSideBar ? styles.sideBar : styles.hideSideBar}>
            <ul>
                {
                    routes.map((route, index) => {
                        const routeLink = index === 0 ? "/dashboard" : `/dashboard/${route.name.toLowerCase()}`
                        const isActive = ActiveRoute(route.name)
                        return (
                            <Link title={route.name} href={routeLink} className={isActive ? styles.active : ""} key={index}>
                                <li>
                                    <span className={styles.icon}>{route.icon}</span>
                                    <span className={styles.activeLink}>{route.name}</span>
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </aside>
    )
}
