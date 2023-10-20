import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import NavBar from './NavBar'
// import { SessionProvider } from 'next-auth/react'
import AuthProvider from './auth/Provider'
import Script from 'next/script'
import GoogleAnalyticsScript from './GoogleAnalyticsScript'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500']

})
const anotherDanger = localFont({
  src: '../public/fonts/AnotherDanger.otf',
})

const poppins = localFont({
  src: '../public/fonts/poppins-regular-webfont.woff2',
  variable: '--font-poppins'

})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  //SEO openGraph is uses in media sites
  openGraph: {
    title: '',
    description: ''
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="winter">
      <GoogleAnalyticsScript />
      <body className={poppins.variable}>
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