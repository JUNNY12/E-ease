"use client"
import styles from "../styles/navbar.module.scss"
import Logo from "@/sharedComponents/Logo/Logo"
import { FaUserCircle } from "react-icons/fa"
import { useSession } from "next-auth/react"
import { BiMenu } from "react-icons/bi"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { DropDown } from "./DropDown"
import { useToggleDashboard } from "@/hooks/toggle/useToggleDashboard"

export default function NavBar() {
    const { data: session } = useSession()
    const username = session?.user?.userInfo?.username
    const { showDropDown, handleShowDropDown , handleShowSideBar} = useToggleDashboard()

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Logo />
            </div>

            <div className={styles.rightCol} >
                <div className={styles.user} role="button" onClick={handleShowDropDown} title="profile">
                    <FaUserCircle />
                    <span>
                        <MdKeyboardArrowDown />
                    </span>
                </div>

                <div className={styles.menuIcon} onClick={handleShowSideBar}>
                    <BiMenu />
                </div>
            </div>
            <div className={styles.dropDownWrap}>
                {showDropDown && <DropDown />}
            </div>
        </nav>
    )
}
