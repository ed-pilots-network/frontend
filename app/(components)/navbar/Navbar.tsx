'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import styles from './navbar.module.css';

export default function Navbar() {
  const [darkmode, setDarkmode] = useState(true);

  const handleDarkmode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.leftNav}>
        <Link className={styles.logo} href={'/'}>
          <Image src="/EDPN_logo.png" alt="logo" width={72} height={64} />
        </Link>
        <div className={styles.branding}>
          <Link className={styles.button} href={'/'}>
            EDPN
          </Link>
        </div>
      </div>
      <button onClick={handleDarkmode} className={styles.themeButton}>
        {darkmode ? (
          <SunIcon boxSize={30} color="#f2f2f2" className={styles.themeIcon} />
        ) : (
          <MoonIcon boxSize={30} color="1e1f22" className={styles.themeIcon} />
        )}
      </button>
    </nav>
  );
}
