import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    borderRadius: '2px',
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

const radioTheme = defineMultiStyleConfig({ baseStyle });

export default radioTheme;
