import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    borderRadius: '2px',
    _dark: {
      _checked: {
        borderColor: 'blue.4',
        bg: 'blue.4',
      },
    },
    _checked: {
      boxSize: 4,
      borderColor: 'blue.4',
      bg: 'blue.4',
      _hover: {
        borderColor: 'blue.4',
        bg: 'blue.4',
      },
    },

    _hover: {
      borderColor: 'blue.4',
      bg: 'blue.4',
    },
  },
});

const radioTheme = defineMultiStyleConfig({ baseStyle });

export default radioTheme;
