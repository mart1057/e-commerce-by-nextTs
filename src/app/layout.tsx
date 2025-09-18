import './globals.css'
import Providers from './providers'
import { Kanit } from 'next/font/google'

const kanit = Kanit({
  subsets: ['latin', 'thai'], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-kanit'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" className={kanit.variable}>
      <body className={`${kanit.className} bg-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
