import { Typography } from "@/sharedComponents/Typography/Typography"
import Link from "next/link"
import styles from  '../styles/search.module.scss'

const collections = [
    'Programming',
    'Business',
    'Marketing',
    'Science',
    'Literature',
    'E-books',
    'Fiction',
    'Non-fiction',
    'Engineering',
    'History',
    'Art',,
    'Sports',
    'Health',
    'Cooking',
]

export default function CollectionSideBar() {
    return (
        <aside className={styles.collectionSideBar}>
            <Typography variant={2} className={styles.collectionHeader}>Collections</Typography>

            <div className={styles.sideWrapper}>
                <ul>
                    <li>
                        <Link href='/search'>All</Link>
                    </li>
                    {
                        collections.map((collection)=>{
                            return (
                                <li key={collection}>
                                    <Link href={`/search/${collection}`}>{collection}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </aside>
    )
}