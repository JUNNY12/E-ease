import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next'
import Provider from '@/provider/Provider';
import GeneralLayout from '@/sharedComponents/Layout/GeneralLayout';
import ToastProvider from '@/provider/ToastProvider';
import { ReactQueryProvider } from '@/provider/ReactQueryProvider';


export const metadata: Metadata = {
  title: 'E-ease',
  description: 'An e-commerce website for books',
}

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode,
  session: any
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <Provider session={session}>
            <ToastProvider>
              <GeneralLayout>
                {children}
              </GeneralLayout>
            </ToastProvider>
          </Provider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
