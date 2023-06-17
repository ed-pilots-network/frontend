'use client';

import { Flex, IconButton, useColorMode, Text, Image } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import localFont from 'next/font/local';

const riftFont = localFont({
  src: '/../../../public/fonts/Rift.ttf',
  display: 'swap',
});

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

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
        <Text ml={2} fontSize="4xl" className={riftFont.className}>
          EDPN
        </Text>
      </Flex>
      <IconButton
        aria-label="Toggle Dark Switch"
        icon={isDark ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        size="sm"
      />
    </Flex>
  );
};

export default Navbar;
