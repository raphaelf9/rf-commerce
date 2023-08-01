import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import './globals.css';
import { Urbanist } from 'next/font/google';

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'RFCommerce',
  description: 'Loja',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
