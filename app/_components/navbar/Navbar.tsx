import {
  Badge,
  Menu,
  MenuButton,
  Flex,
  IconButton,
  Text,
  Image,
  Hide,
  Show,
  LinkBox,
  LinkOverlay,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { MdCode } from 'react-icons/md';

import { rift } from '@/app/_config/theme/fonts';
import useColorMode from '@/app/_hooks/useColorMode';
import Link from 'next/link';
import selectColor from '@/app/_hooks/fontColorSelector';

import ModuleProps, { Tags, Module } from '@/app/_lib/moduleProps';
import NavDrawer from '../nav-drawer/NavDrawer';
import layoutConfig from '@/app/_config/layout';

const Navbar = () => {
  const { isDark, toggleColorMode } = useColorMode();

  return (
    <Flex
      p={2}
      bg={selectColor(isDark, 'box')}
      color={selectColor(isDark, 'text')}
      justify="center"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        maxWidth={layoutConfig.maxWidth}
      >
        <Flex alignItems="center">
          <Show below="md">
            <NavDrawer />
          </Show>
          <Link href="/">
            <Image
              src={'/EDPN_logo_dark_background.png'}
              alt="Logo"
              boxSize="50px"
            />
          </Link>
          <Link href="/">
            <Text
              marginRight={8}
              ml="2"
              fontSize="4xl"
              fontWeight="700"
              color={selectColor(isDark, 'textLight')}
              className={rift.className}
            >
              EDPN
            </Text>
          </Link>

          <Hide below="md">
            {Tags.map((tag) => (
              <Popover key={tag} trigger="click" placement="bottom-start">
                <PopoverTrigger>
                  <Text
                    margin={4}
                    textTransform="capitalize"
                    color={selectColor(isDark, 'textLight')}
                    cursor="pointer"
                  >
                    {tag}
                    <ChevronDownIcon />
                  </Text>
                </PopoverTrigger>
                <PopoverContent backgroundColor={'#00000000'}>
                  <Stack
                    backgroundColor={selectColor(isDark, 'box')}
                    padding={4}
                    border="0px solid"
                    borderRadius="lg"
                    color={selectColor(isDark, 'textLight')}
                  >
                    {ModuleProps.filter(
                      (module: Module) => module.tag === tag,
                    ).map((module) => (
                      <LinkBox
                        borderRadius="lg"
                        padding={4}
                        key={module.title}
                        _hover={{
                          backgroundColor: selectColor(isDark, 'background'),
                          color: selectColor(isDark, 'text'),
                        }}
                      >
                        <Icon as={module.icon} />
                        <LinkOverlay href={module.url} marginLeft={2}>
                          {module.title}
                        </LinkOverlay>
                      </LinkBox>
                    ))}
                  </Stack>
                </PopoverContent>
              </Popover>
            ))}
          </Hide>
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
              <Link href="/playground" prefetch={false}>
                <MenuButton as={IconButton} icon={<MdCode />} size="sm" m={2} />
              </Link>
            </Menu>
          )}
          <IconButton
            aria-label="Toggle Dark Switch"
            icon={isDark ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
