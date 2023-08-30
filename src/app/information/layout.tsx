import type { Metadata } from 'next'
import styles from './styles/information.module.scss'

export const metadata: Metadata = {
    title: 'E-ease | Information',
    description: 'An e-commerce website for books',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className={styles.informationContainer}>
            {children}
        </section>
    )
}
