import localFont from 'next/font/local';
import { Orbitron, Rubik } from 'next/font/google';

export const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
});

export const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
});

export const rift = localFont({
  src: [
    {
      path: '/../../../public/fonts/Rift.ttf',
      weight: '400',
    },
    {
      path: '/../../../public/fonts/Rift Bold.ttf',
      weight: '700',
    },
  ],
  display: 'swap',
});
