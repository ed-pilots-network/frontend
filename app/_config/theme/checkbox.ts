import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    borderColor: 'blue.3',
    _checked: {
      borderColor: 'blue.3',
      boxSize: 4,
      bg: 'blue.3',
    },
  },
});

const checkboxTheme = defineMultiStyleConfig({ baseStyle });

export default checkboxTheme;
