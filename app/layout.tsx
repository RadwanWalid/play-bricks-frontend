'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-tooltip/dist/react-tooltip.css'
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer/Footer';
import AuthContext, { AuthProvider } from '../context/AuthContext';
import { useContext } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const { hideNavbarFooter } = useContext(AuthContext);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {!hideNavbarFooter && <Navbar />}
            {children}
          {!hideNavbarFooter && <Footer />}
        </AuthProvider>
      </body>
    </html>
  )
}
