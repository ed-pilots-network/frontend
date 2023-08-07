'use client';

import { ColorModeScript, Flex, useColorMode } from '@chakra-ui/react';
import selectColor from '@/app/_hooks/fontColorSelector';
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
        bg={selectColor(isDark, 'background')}
        color={selectColor(isDark, 'text')}
        direction="column"
        minH="100vh"
      >
        <Navbar />
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default LayoutClient;
