import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello Mom!</h1>
      <Image src="/EDPN_logo.png" alt="EDPN Logo" width={300} height={300} />
    </main>
  );
}
