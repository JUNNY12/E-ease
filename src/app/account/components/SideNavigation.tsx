"use client"
import { Button } from "@/sharedComponents/Button/Button"
import styles from "../styles/account.module.scss"
import Link from "next/link"
import { usePathname } from "next/navigation"

const routes = [
    {
        name: 'My Ease Account',
        path: '/account',
        title: 'My Ease Account'
    },
    {
        name: 'Orders',
        path: '/account/orders',
        title: 'Orders'
    },
    {
        name:'Account Management',
        path: '/account/management',
        title: 'Account Management'
    },
    {
        name:'Addresses',
        path: '/account/addresses',
        title: 'Addresses'

    }
]

export const SideNavigation = () => {
    const pathname = usePathname()

    const ActiveRoute = (route: string) => {
        return pathname === route
    }

    return (
        <aside className={styles.aside}>
            <nav>
                <ul>
                    {
                        routes.map((route, index) => {
                            const isActive = ActiveRoute(route.path)   
                            return (
                                <li title={route.title} className={isActive? styles.isActive: ''} key={index}>
                                    <Link className={ isActive ? styles.activeLink: ''} href={route.path}>
                                        {route.name}
                                    </Link>
                                </li>
                            )
                        }
                        )
                    }
                </ul>

                <div className={styles.buttonContainer}>
                    <Button>Sign Out</Button>
                </div>
            </nav>
        </aside>
    )
}