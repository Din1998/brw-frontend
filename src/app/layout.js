'use client'
import { Roboto} from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import './fontawesome-all.min.css'
import 'animate.css';
import './globals.css'






const roboto = Roboto({ subsets: ['latin'],weight: ["400", "500", "700", "900"]})



export default function RootLayout({ children }) {

  return (

    <html lang="en">
      
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
