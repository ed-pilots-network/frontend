import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  tab: {
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
});

const tabsTheme = defineMultiStyleConfig({ baseStyle });

export default tabsTheme;
