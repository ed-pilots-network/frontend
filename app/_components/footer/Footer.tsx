import { Box } from '@chakra-ui/react';
import useColorMode from '@/app/_hooks/useColorMode';

const Footer = () => {
  const { isDark } = useColorMode();

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
