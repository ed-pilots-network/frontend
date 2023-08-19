import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import selectColor from '@/app/_hooks/fontColorSelector';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const outline = definePartsStyle({
  field: {
    border: '1px solid',
    borderColor: selectColor(false, 'border'),

    _selected: {
      borderColor: 'blue.600',
    },
    _dark: {
      borderColor: selectColor(true, 'border'),
    },
  },

  icon: {
    color: '#C05621',
  },
});

const selectTheme = defineMultiStyleConfig({ variants: { outline } });

export default selectTheme;
