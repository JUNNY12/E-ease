'use client'
import Link from "next/link"
import styles from '../styles/information.module.scss'
import { FaGreaterThan } from 'react-icons/fa'



export default function NavigationHeader() {

    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/information">
                        Information
                    </Link>
                </li>

                <li>
                    <FaGreaterThan />
                </li>

                <li>
                    <Link href="/checkout">
                        Shipping
                    </Link>
                </li>

                <li>
                    <FaGreaterThan />
                </li>

                <li>
                    <Link href="#">
                        Payment
                    </Link>
                </li>
            </ul>
        </nav>
    )
}