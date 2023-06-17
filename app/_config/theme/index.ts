'use client';

import { extendTheme } from '@chakra-ui/react';

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
});

export default theme;
