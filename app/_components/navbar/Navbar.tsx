import { Flex, IconButton, Text, Image } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import { rift } from '@/app/_config/theme/fonts';
import useColorMode from '@/app/_hooks/useColorMode';

const Navbar = () => {
  const { isDark, toggleColorMode } = useColorMode();

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={2}
      bg={isDark ? 'dark.box' : 'light.box'}
      color={isDark ? 'dark.text' : 'light.text'}
    >
      <Flex alignItems="center">
        <Image
          src={
            isDark ? '/EDPN_logo_dark_background.png' : '/EDPN_logo_black.png'
          }
          alt="Logo"
          boxSize="50px"
        />
        <Text ml={2} fontSize="4xl" fontWeight="700" className={rift.className}>
          EDPN
        </Text>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Text ml={2} px={2} fontSize="md">
          Server: {process.env.NEXT_PUBLIC_STAGE}
        </Text>
        <IconButton
          aria-label="Toggle Dark Switch"
          icon={isDark ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          size="sm"
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
