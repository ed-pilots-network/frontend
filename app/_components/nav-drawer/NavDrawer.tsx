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
  Heading,
  LinkBox,
  Box,
  LinkOverlay,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import selectColor from '@/app/_hooks/fontColorSelector';
import useColorMode from '@/app/_hooks/useColorMode';
import { HamburgerIcon } from '@chakra-ui/icons';
import ModuleProps, { Module, Tags } from '@/lib/moduleProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                  src={'/EDPN_logo_spelled_nav_drawer.png'}
                  objectFit="cover"
                  alt="Logo"
                />
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
                      <FontAwesomeIcon icon={module.icon} />
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
