'use client';

import { ColorModeScript, Box, Flex, useColorMode } from '@chakra-ui/react';
import selectColor from '@/app/_hooks/fontColorSelector';
import Navbar from './_components/navbar/Navbar';
import Footer from './_components/footer/Footer';
import theme from './_config/theme';
import layoutConfig from '@/app/_config/layout';

const LayoutClient = ({ children }: { children: React.ReactNode }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <>
      {/* ColorModeScript mitigates the FOUC for dark theme being default */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Flex
        bg={selectColor(isDark, 'background')}
        color={selectColor(isDark, 'text')}
        direction="column"
        minH="100vh"
        // bgGradient={selectColor(isDark, 'gradient')}
      >
        <Navbar />
        <Box as="main" flex="1">
          <Flex p={5} justify="center">
            <Flex width="100%" maxWidth={layoutConfig.maxWidth}>
              {children}
            </Flex>
          </Flex>
        </Box>
        <Footer />
      </Flex>
    </>
  );
};

export default LayoutClient;
