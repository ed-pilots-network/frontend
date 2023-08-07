'use client';

import { Box, Center, Heading, VStack } from '@chakra-ui/react';
import layoutConfig from '../_config/layout';

const PageClient = () => (
  <Box p={5} flex="1" as="main">
    <Center>
      <VStack align="stretch" maxWidth={layoutConfig.maxWidth}>
        <Heading
          as="h1"
          size={{ base: 'md', md: 'lg', lg: 'lg' }}
          marginX={{ base: 'auto', md: '0', lg: '0' }}
        >
          FAQ
        </Heading>
      </VStack>
    </Center>
  </Box>
);

export default PageClient;
