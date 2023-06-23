import { extendTheme } from '@chakra-ui/react';
import { rubik, orbitron } from './fonts';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    light: {
      text: '#272f33',
      background: '#e6eef2',
      box: '#4e5d66',
    },
    dark: {
      text: '#F2F2F2',
      background: '#2B2D31',
      box: '#1E1F22',
    },
  },
  fonts: {
    body: rubik.style.fontFamily,
    heading: orbitron.style.fontFamily,
  },
});

export default theme;
