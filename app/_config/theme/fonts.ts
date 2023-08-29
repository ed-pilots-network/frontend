import localFont from 'next/font/local';
import { Orbitron, Rubik } from 'next/font/google';

export const orbitron = Orbitron({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const rubik = Rubik({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const rift = localFont({
  src: [
    {
      path: '../../../public/fonts/Rift.ttf',
      weight: '400',
    },
    {
      path: '../../../public/fonts/Rift_Bold.ttf',
      weight: '700',
    },
  ],
  display: 'swap',
});
