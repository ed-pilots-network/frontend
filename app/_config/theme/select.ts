import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const outline = definePartsStyle({
  field: {
    border: '1px solid',
    borderColor: 'blue.4',

    _dark: {
      borderColor: 'blue.4',
      icon: {
        color: 'blue.3',
      },
    },
  },

  icon: {
    color: 'blue.5',
  },
});

const selectTheme = defineMultiStyleConfig({ variants: { outline } });

export default selectTheme;
