'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-tooltip/dist/react-tooltip.css'
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer/Footer';
import { AuthProvider } from '../context/AuthContext';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {usePathname() != '/Login' && <Navbar />}
            {children}
          {usePathname() != '/Login' && <Footer />}
        </AuthProvider>
      </body>
    </html>
  )
}
