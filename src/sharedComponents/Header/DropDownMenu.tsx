"use client"
import styles from './header.module.scss'
import { Button } from '../Button/Button'
import useHandleToggle from '@/hooks/toggle/useToggleHeader'
import { useEffect, useRef } from 'react'
import Search from '../Search/Search'
import Link from 'next/link'
import { FaUser } from 'react-icons/fa'

export default function DropDownMenu() {
    const { handleOutsideClick, handleCloseMenu, toggleMenu } = useHandleToggle()
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.addEventListener('click', (e) => handleOutsideClick(e, ref))

        return () => {
            document.removeEventListener('click', (e) => handleOutsideClick(e, ref))
        }
    }, [handleOutsideClick])

    return (
        <div ref={ref} className={styles.menuContainer}>
            <div>
                <Button onClick={handleCloseMenu} className={styles.closeButton} title='close menu' >X</Button>
            </div>

            <div className={styles.menuWrapper}>
                <div>
                    <Search className={styles.dropSearch} />
                </div>

                <div>
                    <ul>
                        <li>
                            <Link href="/search">All</Link>
                        </li>
                        <li>
                            <Link href="/search/E-books">E-books</Link>
                        </li>
                        <li>
                            <Link href="/search/Literature">Literatures</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.myAccount}>
                    <div className={styles.myAccountLink}>
                        <Link href={`#`}>
                            <span><FaUser /></span>
                            <span>My Account</span>
                        </Link>
                    </div>
                </div>

                <div className={styles.bottomSignIn}>
                    <Link href="/auth/login">
                        <Button className={styles.signIn}>SIGN IN</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}