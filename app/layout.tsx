import { Inter } from 'next/font/google';
import Navbar from './(components)/navbar/Navbar';
import Footer from './(components)/footer/Footer';
import '@/styles/globals.css';
import styles from './layout.module.css';
import Providers from './providers';

export const metadata = {
  title: 'EDPN',
  description: 'Elite Dangerous Pilots Network',
  icons: 'EDPN_logo.png',
};

const inter = Inter({ subsets: ['latin'], weight: ['400'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className={styles.body}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
