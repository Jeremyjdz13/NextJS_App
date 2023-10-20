import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
// import { SessionProvider } from 'next-auth/react'
import AuthProvider from './auth/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        {/* <SessionProvider> */}
         <AuthProvider>
          <NavBar />
            <main className='p-5'>
                {children}
            </main>
          </AuthProvider>
        {/* </SessionProvider> */}
      </body>
    </html>
  )
}

/* 
  SessionProvider will throw an error "React Context is unavailable in Server Components". 
  Adding "use client", will throw another error:
  "You are attempting to export "metadata" from a component marked with "use client", which is disallowed. Either remove the export, or the "use client" directive. Read more: https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive"

  To resolve you have to wrap the SessionProvider inside a client component. 
*/