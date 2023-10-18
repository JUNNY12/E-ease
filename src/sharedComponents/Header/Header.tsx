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
import { useCart } from "@/hooks/cart/useCart"
import { useEffect, useState } from "react"


export default function Header() {
    const {
        toggleCart,
        handleOpenCart,
        toggleMenu,
        handleOpenMenu,
        handleToggleAccount,
        toggleAccount
    } = useHandleToggle()
    const { state: { cart } } = useCart()
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

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
                    <span> <FaUser /> </span>
                    <span> Account </span>
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
                            (isClient && cart?.items?.length !== 0) && <span className={styles.inCart}></span>
                        }
                    </span>
                </ div>
            </nav>
        </header>
    )
}