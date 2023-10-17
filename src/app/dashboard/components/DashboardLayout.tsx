"use client"
import NavBar from "./NavBar"
import SideBar from "./SideBar"
import styles from "../../admin/styles/admin.module.scss"
import { useToggleDashboard } from "@/hooks/toggle/useToggleDashboard"

type ChildrenProps = {
    children: React.ReactNode
}

export function DashboardGeneralLayout({ children }: ChildrenProps) {
    const { showSideBar } = useToggleDashboard()
    return (
        <section>
            <NavBar />
            <SideBar />
            
            <div className={styles.childrenWrapper}>
                {children}
            </div>
        </section>
    )
}