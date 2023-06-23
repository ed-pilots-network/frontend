import { Box, useColorMode } from '@chakra-ui/react';

const Footer = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Box
      as="footer"
      py={5}
      textAlign="center"
      bg={isDark ? 'dark.box' : 'light.box'}
      color={isDark ? 'dark.text' : 'light.background'}
    >
      Engineered by the EDPN Team
    </Box>
  );
};

export default Footer;
