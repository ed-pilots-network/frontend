import { Box } from '@chakra-ui/react';
import useColorMode from '@/app/_hooks/useColorMode';
import selectColor from '@/app/_hooks/fontColorSelector';

const Footer = () => {
  const { isDark } = useColorMode();

  return (
    <Box
      as="footer"
      py={5}
      textAlign="center"
      bg={selectColor(isDark, 'box')}
      color={selectColor(isDark, 'textLight')}
    >
      Engineered by the EDPN Team
    </Box>
  );
};

export default Footer;
