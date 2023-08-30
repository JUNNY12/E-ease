import type { Metadata } from 'next'
import styles from './styles/checkout.module.scss'

export const metadata: Metadata = {
    title: 'E-ease | checkout',
    description: 'An e-commerce website for books',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className={styles.checkoutContainer}>
            {children}
        </section>
    )
}
