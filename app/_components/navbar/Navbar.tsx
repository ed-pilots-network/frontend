import {
  Flex,
  IconButton,
  Text,
  Image,
  Hide,
  Badge,
  Menu,
  MenuButton,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { MdCode } from 'react-icons/md';

import { rift } from '@/app/_config/theme/fonts';
import useColorMode from '@/app/_hooks/useColorMode';
import Link from 'next/link';
import selectColor from '@/app/_hooks/fontColorSelector';

const Navbar = () => {
  const { isDark, toggleColorMode } = useColorMode();

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={2}
      bg={selectColor(isDark, 'box')}
      color={selectColor(isDark, 'text')}
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
            color={selectColor(isDark, 'textLight')}
            className={rift.className}
          >
            EDPN
          </Text>
        </Link>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Hide below="md">
          <Badge
            margin={2}
            px={2}
            fontSize="md"
            colorScheme={isDark ? 'orange' : 'gray'}
          >
            {process.env.NEXT_PUBLIC_STAGE}
          </Badge>
        </Hide>
        {process.env.NEXT_PUBLIC_STAGE === 'localhost' && (
          <Menu>
            <Link href="/playground">
              <MenuButton as={IconButton} icon={<MdCode />} size="sm" m={2} />
            </Link>
          </Menu>
        )}
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
