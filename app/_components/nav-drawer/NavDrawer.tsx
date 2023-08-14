import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  Flex,
  Link,
  Text,
  Heading,
  LinkBox,
  Box,
  Icon,
  LinkOverlay,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import selectColor from '@/app/_hooks/fontColorSelector';
import useColorMode from '@/app/_hooks/useColorMode';
import { HamburgerIcon } from '@chakra-ui/icons';
import { rift } from '@/app/_config/theme/fonts';
import ModuleProps, { Module, Tags } from '../../_lib/moduleProps';

const NavDrawer = () => {
  const { isDark } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  // Close the drawer if the screen resizes above the md breakpoint
  const hideDrawer = !useBreakpointValue({ base: true, md: false });
  useEffect(() => {
    if (isOpen && hideDrawer) {
      onClose();
    }
  }, [hideDrawer, isOpen]);

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="Open Navigation Drawer"
        icon={<HamburgerIcon />}
        marginX={4}
        role="button"
      />

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={selectColor(isDark, 'textLight')} />
          <DrawerHeader
            backgroundColor={selectColor(isDark, 'box')}
            color={selectColor(isDark, 'textLight')}
          >
            <Flex alignItems="center" justifyContent="center">
              <Link href="/">
                <Image
                  src={'/EDPN_logo_dark_background.png'}
                  alt="Logo"
                  boxSize="50px"
                />
              </Link>
              <Link href="/">
                <Text
                  marginLeft="2"
                  fontSize="4xl"
                  fontWeight="700"
                  color={selectColor(isDark, 'textLight')}
                  className={rift.className}
                >
                  EDPN
                </Text>
              </Link>
            </Flex>
          </DrawerHeader>

          <DrawerBody
            backgroundColor={selectColor(isDark, 'box')}
            color={selectColor(isDark, 'textLight')}
          >
            <Divider opacity="1.0" marginBottom={8}></Divider>
            {Tags.map((tag) => (
              <Box key={tag}>
                <Heading textTransform="capitalize" size="md" as="h2">
                  {tag}
                </Heading>
                <Box marginBottom={6}>
                  {ModuleProps.filter(
                    (module: Module) => module.tag === tag,
                  ).map((module) => (
                    <LinkBox
                      borderRadius="lg"
                      padding={2}
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
                </Box>
              </Box>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
