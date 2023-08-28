"use client"
import Link from "next/link"
import styles from './header.module.scss'
import { GrCart } from 'react-icons/gr'
import CartDropDown from "../Cart/CartDropDown"
import useHandleToggle from "@/hooks/toggle/useToggleHeader"
import { GrMenu } from "react-icons/gr"
import Logo from "../Logo/Logo"
import DropDownMenu from "./DropDownMenu"
import Search from "../Search/Search"
import { FaSearch } from "react-icons/fa"


export default function Header() {
    const { toggleCart, handleOpenCart, toggleMenu, handleOpenMenu } = useHandleToggle()

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

                <div
                    onClick={handleOpenCart}
                    className={styles.cartIcon}>
                    <GrCart />
                </div>
            </nav>

        </header>
    )
}