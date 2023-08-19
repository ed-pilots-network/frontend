import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    borderColor: '#ed8936',
    _checked: {
      borderColor: '#ed8936',
      boxSize: 4,
      bg: '#ed8936',
    },
  },
});

const checkboxTheme = defineMultiStyleConfig({ baseStyle });

export default checkboxTheme;
