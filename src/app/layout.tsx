import '../styles/globals.scss'
import type { Metadata } from 'next'
import Provider from '@/provider/Provider';
import GeneralLayout from '@/sharedComponents/Layout/GeneralLayout';


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
          <GeneralLayout>
            {children}
          </GeneralLayout>
        </Provider>
      </body>
    </html>
  )
}
