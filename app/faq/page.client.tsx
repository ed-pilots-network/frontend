'use client';

import { Flex, Heading } from '@chakra-ui/react';

const PageClient = () => (
  <Flex flexDirection="column" gap="24px" width="100%">
    <Heading
      as="h1"
      size={{ base: 'md', md: 'lg', lg: 'lg' }}
      marginX={{ base: 'auto', md: '0', lg: '0' }}
    >
      FAQ
    </Heading>
  </Flex>
);

export default PageClient;
