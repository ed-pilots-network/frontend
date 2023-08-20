import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const outline = defineStyle({
  border: '1px solid',
  borderColor: 'brown.6',
  background: 'brown.5',
  color: 'blue.1',
  _hover: {
    borderColor: 'brown.5',
    background: 'brown.4',
  },
});

const buttonTheme = defineStyleConfig({
  variants: { outline },
});

export default buttonTheme;
