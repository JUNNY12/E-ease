import styles from '../styles/search.module.scss'
import Link from 'next/link'
import { Typography } from '@/sharedComponents/Typography/Typography'

export default function SortSideBar() {
    return (
        <aside className={styles.sortSideBar}>
            <Typography variant={2} className={styles.collectionHeader}>Sort</Typography>

            <div className={styles.sideWrapper}>
                <ul>
                    <li>
                        <Link href="#">Trending</Link>
                    </li>
                    <li>
                        <Link href="#">Newest</Link>
                    </li>
                    <li>
                        <Link href="#">Oldest</Link>
                    </li>
                    <li>
                        <Link href="#">Price: low to high</Link>
                    </li>
                    <li>
                        <Link href="#">Price: high to low</Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}