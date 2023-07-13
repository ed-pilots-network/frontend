import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import selectColor from '@/app/_hooks/fontColorSelector';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const customSelect = definePartsStyle({
  field: {
    border: '1px solid',
    borderColor: selectColor(false, 'border'),
    backgroundColor: selectColor(false, 'accent-bg'),

    _focus: {
      borderColor: 'blue.300',
    },
    _dark: {
      borderColor: selectColor(true, 'border'),
      backgroundColor: selectColor(true, 'accent-bg'),
    },
  },

  icon: {
    paddingX: '3px',
  },
});

const selectTheme = defineMultiStyleConfig({
  variants: { customSelect },
});

export default selectTheme;
