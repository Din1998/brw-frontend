'use client'
import { Roboto} from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import './fontawesome-all.min.css'
import './globals.css'

import NavBar from '@/components/navBar/NavBar';
import NavBar2 from '@/components/navBar2/NavBar2';
import Footer from '@/components/footer/Footer';

import { usePathname } from 'next/navigation'


const roboto = Roboto({ subsets: ['latin'],weight: ["400", "500", "700", "900"]})



export default function RootLayout({ children,page }) {

  const isHomeRoute = usePathname();
  return (

    <html lang="en">
      <body className={roboto.className}>
      {isHomeRoute === '/' ? (
        <NavBar />
      ) : (
        <NavBar2 />
      )}
          
        {children}

        <Footer />

      </body>
    </html>
  )
}
