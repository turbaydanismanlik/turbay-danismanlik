import type {Metadata} from 'next'
// import {Montserrat} from 'next/font/google'
import './globals.css'
import Head from 'next/head'

// const montserrat = Montserrat({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   subsets: ['latin'],
// })

export const metadata: Metadata = {
  title: 'Turbay Danışmanlık',
  icons: [],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <body
        //  className={montserrat.className}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
