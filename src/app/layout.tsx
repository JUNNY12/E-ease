import '../styles/globals.scss'
import type { Metadata } from 'next'
import Header from '@/sharedComponents/Header/Header'
import Footer from '@/sharedComponents/Footer/Footer';
import Provider from '@/provider/Provider';


export const metadata: Metadata = {
  title: 'E-ease',
  description: 'An e-commerce website for books',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
