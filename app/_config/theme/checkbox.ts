import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    _dark: {
      _checked: {
        borderColor: '#9bb9cb',
        bg: '#9bb9cb',
      },
    },
    _checked: {
      boxSize: 4,
      borderColor: '#ed8936',
      bg: '#ed8936',
    },
  },
});

const checkboxTheme = defineMultiStyleConfig({ baseStyle });

export default checkboxTheme;
