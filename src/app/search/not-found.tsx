import Link from 'next/link'
import styles from "./styles/search.module.scss"

export default function NotFound() {
    return (
        <div className={`notFoundContainer`}>
            <p>
                Ooops!!! books in this category are not available at the moment.
            </p>
            <Link href="/search">Return Home</Link>
        </div>
    )
}