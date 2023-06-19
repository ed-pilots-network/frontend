'use client';

import { extendTheme } from '@chakra-ui/react';
import { acumin, rift } from './fonts';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    light: {
      text: '#2D3748',
      background: '#F7FAFC',
      box: '#F2F2F2',
    },
    dark: {
      text: '#F2F2F2',
      background: '#2B2D31',
      box: '#1E1F22',
    },
  },
  fonts: {
    body: acumin.style.fontFamily,
    heading: rift.style.fontFamily,
  },
});

export default theme;
