import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import React, { ReactNode } from 'react'

type SharedLayoutProps = {
    children: ReactNode;
  };

const SharedLayout = ({ children }: SharedLayoutProps) => {
  return (
    <div>
        <Navbar />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default SharedLayout