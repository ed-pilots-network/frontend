import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const outline = defineStyle({
  border: '1px solid',
  borderColor: 'blue.4',
  background: 'blue.3',
  color: 'blue.6',

  _hover: {
    borderColor: 'blue.5',
    background: 'blue.4',
  },

  _dark: {
    borderColor: 'blue.4',
    background: 'blue.3',
    color: 'blue.6',

    _hover: {
      borderColor: 'blue.5',
      background: 'blue.4',
    },
  },
});

const colorless = defineStyle({
  border: '1px solid',
  borderColor: 'blue.4',
});

const submit = defineStyle({
  border: '1px solid',
  borderColor: 'orange.4',
  background: 'orange.3',
  color: 'blue.6',

  _hover: {
    borderColor: 'orange.5',
    background: 'orange.4',
  },

  _dark: {
    borderColor: 'orange.4',
    background: 'orange.3',
    color: 'blue.6',

    _hover: {
      borderColor: 'orange.5',
      background: 'orange.4',
    },
  },
});

const buttonTheme = defineStyleConfig({
  variants: { outline, colorless, submit },
});

export default buttonTheme;
