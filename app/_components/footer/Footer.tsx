import { Box } from '@chakra-ui/react';
import GetColor from '@/app/_hooks/colorSelector';

const Footer = () => (
  <Box
    as="footer"
    py={5}
    textAlign="center"
    bg={GetColor('box')}
    color={GetColor('textLight')}
  >
    Engineered by the EDPN Team
  </Box>
);

export default Footer;
