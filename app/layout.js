import TopBar from '@/components/TopBar'
import "../style/globals.css"
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PinkSurfing',
  description: 'PinkSurfing Ecommerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>
      <body className={`${inter.className}`}>
        <TopBar/>
        <NavBar/>
        {children}
        </body>
    </html>
  )
}
