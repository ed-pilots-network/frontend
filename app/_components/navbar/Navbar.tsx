import { Flex, IconButton, Text, Image, Hide } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import { rift } from '@/app/_config/theme/fonts';
import useColorMode from '@/app/_hooks/useColorMode';
import Link from 'next/link';

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
        <Link href="/">
          <Image
            src={'/EDPN_logo_dark_background.png'}
            alt="Logo"
            boxSize="50px"
          />
        </Link>
        <Link href="/">
          <Text
            ml="2"
            fontSize="4xl"
            fontWeight="700"
            color={isDark ? 'dark.text' : 'light.background'}
            className={rift.className}
          >
            EDPN
          </Text>
        </Link>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Hide below="sm">
          <Text
            ml={2}
            px={2}
            fontSize="md"
            color={isDark ? 'dark.text' : 'light.background'}
          >
            Server: {process.env.NEXT_PUBLIC_STAGE}
          </Text>
        </Hide>
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
