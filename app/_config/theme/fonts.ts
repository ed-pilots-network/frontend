'use client';

import { NextFont } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local';

export const rift = localFont({
  src: [
    {
      path: '/../../../public/fonts/Rift.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/../../../public/fonts/Rift Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const acumin = localFont({
  src: [
    {
      path: '/../../../public/fonts/Acumin Pro.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/../../../public/fonts/Acumin Pro Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/../../../public/fonts/Acumin Pro Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '/../../../public/fonts/Acumin Pro Bold Italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
});

// I cannot believe this is the only way to override fonts with Chakra, but I have not found another one.
export function overrideFont(font: NextFont): String {
  return `${font.style.fontFamily} !important`;
}
