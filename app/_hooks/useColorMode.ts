import { useColorMode as useChakraColorMode } from '@chakra-ui/react';

const useColorMode = () => {
  const colorModeResult = useChakraColorMode();

  return {
    ...colorModeResult,
    isDark: colorModeResult.colorMode === 'dark',
  };
};

export default useColorMode;
