import styles from './footer.module.scss'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'
import Logo from '../Logo/Logo'

export default function Footer() {

    const date = new Date().getFullYear()

    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.gridContainer}>
                <div>
                    <Logo />
                </div>

                <div className={styles.footerList}>
                    <ul >
                        <li>
                            <Link href={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link href={`#`}>About</Link>
                        </li>
                        <li>
                            <Link href={`#`}>Terms & condition</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.footerList}>
                    <ul >
                        <li>
                            <Link href={`#`}>Shipping and return Policy</Link>
                        </li>
                        <li>
                            <Link href={`#`}>Privacy policy</Link>
                        </li>
                        <li>
                            <Link href={`#`}>FAQ</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <select name="" id="" className={styles.selectInput}>
                        <option value="">English</option>
                        <option value="">French</option>
                        <option value="">Spanish</option>
                    </select>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <div>
                    <p className={styles.footerPara}>
                        <span> © {date} E-Ease, Inc. All rights reserved. </span>
                    </p>
                </div>

                <div>
                    <ul className={styles.socialIcons}>
                        <li>
                            <a href={`#`} target='_blank' title='twitter'>
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href={`#`} target='_blank' title='instagram'>
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href={`#`} target='_blank' title='facebook'>
                                <FaFacebook />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
