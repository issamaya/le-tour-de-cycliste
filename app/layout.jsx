'use client'


import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Accueil from '@/components/Accueil';
import Ottawa from '@/components/Ottawa';
import Montreal from '@/components/Montreal';
import Inscription from '@/components/Inscription';
import Reservation from '@/components/Reservation';
import { Inter } from 'next/font/google';
import { useState } from 'react'
import '@/style/globals.css';
import 'normalize.css/normalize.css';
import styles from './layout.module.css';

const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({ children }) {
  const [page, setPage] = useState('accueil');
  return (
    <html lang="en">
      <body className={inter.className + ' ' + styles.body}>
        <Header setPage={setPage} />
        <main className={styles.main}>
          {/*children*/}
          {page === 'accueil' ?
            <Accueil />
            : page === 'Ottawa' ?
            <Ottawa />
            : page === 'Montreal' ?
             <Montreal />
            : page === 'inscription' ?
            <Inscription />
            : page === 'reservation' ?
            <Reservation />
            :
            <div> 404 - Not Found </div>
          }
        </main>
        <Footer />
      </body>
    </html>
  );
}
