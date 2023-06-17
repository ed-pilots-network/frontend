'use client';

import { ColorModeScript, Flex, Box, useColorMode } from '@chakra-ui/react';
import Navbar from './_components/navbar/Navbar';
import Footer from './_components/footer/Footer';
import theme from './_config/theme';

const LayoutClient = ({ children }: { children: React.ReactNode }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <>
      {/* ColorModeScript mitigates the FOUC for dark theme being default */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Flex
        bg={isDark ? 'dark.background' : 'light.background'}
        color={isDark ? 'dark.text' : 'light.text'}
        direction="column"
        minH="100vh"
      >
        <Navbar />
        <Box p={5} flex="1" as="main">
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  );
};

export default LayoutClient;
