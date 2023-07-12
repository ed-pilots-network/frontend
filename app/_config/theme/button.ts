import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const customButton = defineStyle({
  border: '1px solid',
  borderColor: '#f6ad55',
  background: '#ed8936',
  color: '#f2f2f2',
  _hover: {
    borderColor: '#fbaf5d',
    background: '#f6ad55',
  },
  _dark: {
    borderColor: '#cddce5',
    background: '#9BB9CB',
    color: '#272f33',

    _hover: {
      bordercolor: '#e6eef2',
      background: '#cddce5',
    },
  },
});

const buttonTheme = defineStyleConfig({
  variants: { customButton },
});

export default buttonTheme;
