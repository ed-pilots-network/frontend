'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import styles from './navbar.module.css';

export default function Navbar() {
  const [darkmode, setDarkmode] = useState(true);
  const preferredTheme = window.localStorage.getItem('preferred-theme');

  const handleDarkmode = () => {
    setDarkmode(!darkmode);
  };

  useEffect(() => {
    // aslink87: default to darkmode - does not adjust for lightmode user preference
    const root = window.document.documentElement;
    root.classList.add('dark');

    const setTheme = () => {
      if (darkmode) {
        if (preferredTheme !== 'dark') {
          window.localStorage.setItem('preferred-theme', 'dark');
          root.classList.add('dark');
          root.classList.remove('light');
        }
      } else {
        window.localStorage.setItem('preferred-theme', 'light');
        root.classList.remove('dark');
        root.classList.add('light');
      }
    };

    setTheme();
  }, [preferredTheme, darkmode]);

  const darkStyles = {
    background: 'var(--color-dark)',
  };

  const lightStyles = {
    background: 'var(--color-gray)',
  };

  return (
    <nav
      className={`${styles.nav}${darkmode ? ' dark' : ''}`}
      style={darkmode ? darkStyles : lightStyles}
    >
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
          <MoonIcon boxSize={30} color="#f2f2f2" className={styles.themeIcon} />
        )}
      </button>
    </nav>
  );
}
