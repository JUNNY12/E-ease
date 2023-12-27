"use client"
import Link from "next/link"
import styles from './header.module.scss'
import { GrCart } from 'react-icons/gr'
import CartDropDown from "../Cart/CartDropDown"
import useHandleToggle from "@/hooks/toggle/useToggleHeader"
import { GrMenu } from "react-icons/gr"
import Logo from "../Logo/Logo"
import DropDownMenu from "./DropDownMenu"
import DropDownAccount from "./DropDownAccount"
import Search from "../Search/Search"
import { FaSearch, FaUser } from "react-icons/fa"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { useClient } from "@/hooks/useClient"
import { useCart } from "@/hooks/cart/useCart"
import { useSession } from "next-auth/react"


export default function Header() {
    const {
        toggleCart,
        handleOpenCart,
        toggleMenu,
        handleOpenMenu,
        handleToggleAccount,
        toggleAccount
    } = useHandleToggle()
    const isClient = useClient()
    const {isEmpty} = useCart()
    const {status, data:user} = useSession()

    return (
        <header className={styles.header} >
            <div>
                {toggleCart && <CartDropDown />}
            </div>

            <div>
                {toggleMenu && <DropDownMenu />}
            </div>

            <nav className={styles.navWrapper}>

                <div role="button" onClick={handleOpenMenu} className={styles.menuIcon}>
                    <GrMenu />
                </div>

                <div className={styles.responsiveLogo}>
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>

                <ul>
                    <li><Logo /></li>
                    <li className={styles.navLink}>
                        <Link href="/search">All</Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link href="/search/E-book">E-books</Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link href="/search/Literature">Literatures</Link>
                    </li>
                </ul>

                <div className={styles.searchContainer}>
                    <Search className={styles.searchInput} />
                    <FaSearch className={styles.searchIcon} />
                </div>

                <div className={styles.account} role="button" onClick={handleToggleAccount}>
                    {
                        status === 'authenticated' 
                        ? <span> Hi, {user?.user.userInfo?.username}</span>
                        :
                        <span>
                                <span> <FaUser /> </span>
                                <span> Account </span>
                        </span>
                    }
                    <span>{
                        toggleAccount ? <MdKeyboardArrowUp className={styles.arrowDown} /> : <MdKeyboardArrowDown className={styles.arrowDown} />
                    } </span>
                </div>

                <div className={styles.dropDownAccountWrapper}>
                    {toggleAccount && <DropDownAccount />}
                </div>
                <div
                    onClick={handleOpenCart}
                    className={styles.cartIcon}>
                    <span><GrCart /></span>
                    <span>
                        {
                            (isClient && !isEmpty) && <span className={styles.inCart}></span>
                        }
                    </span>
                </ div>
            </nav>
        </header>
    )
}