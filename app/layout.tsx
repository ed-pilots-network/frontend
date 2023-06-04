import '@/styles/globals.css';
import styles from './layout.module.css';

export const metadata = {
  title: 'EDPN',
  description: 'Elite Dangerous Pilots Network',
  icons: 'EDPN_logo.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  );
}
