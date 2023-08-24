import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    borderColor: 'blue.4',
    _hover: {
      bg: 'blue.4',
      borderColor: 'blue.4',
    },
    _checked: {
      borderColor: 'blue.4',
      boxSize: 4,
      bg: 'blue.4',
      _hover: {
        bg: 'blue.4',
        borderColor: 'blue.4',
      },
    },
    _dark: {
      borderColor: 'blue.3',
      _checked: {
        borderColor: 'blue.3',
        boxSize: 4,
        bg: 'blue.3',
      },
    },
  },
});

const checkboxTheme = defineMultiStyleConfig({ baseStyle });

export default checkboxTheme;
