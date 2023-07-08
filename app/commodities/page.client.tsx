'use client';

import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import Form from '@/components/commodities/Form';
import useColorMode from '@/app/_hooks/useColorMode';
import selectColor from '@/app/_hooks/fontColorSelector';

const PageClient = () => {
  const { isDark } = useColorMode();

  return (
    <Center width="100%">
      <Flex flexDirection="column" gap="24px" width="100%" maxWidth="1500px">
        <Heading
          as="h1"
          size={{ base: 'md', md: 'lg', lg: 'lg' }}
          marginX={{ base: 'auto', md: '0', lg: '0' }}
        >
          Commodities
        </Heading>
        <Heading as="h2" size={{ base: 'xs', md: 'sm', lg: 'sm' }}>
          Find Closest Station to Buy/Sell Commodities
        </Heading>
        <Box
          borderWidth="1px"
          borderRadius="9px"
          borderColor={selectColor(isDark, 'text')}
          p="1rem"
        >
          <Form />
        </Box>
      </Flex>
    </Center>
  );
};

export default PageClient;
