'use client';

import { Center, Flex, Heading } from '@chakra-ui/react';

const PageClient = () => (
  <Center width="100%">
    <Flex flexDirection="column" gap="24px" width="100%" maxWidth="1500px">
      <Heading
        as="h1"
        size={{ base: 'md', md: 'lg', lg: 'lg' }}
        marginX={{ base: 'auto', md: '0', lg: '0' }}
      >
        FAQ
      </Heading>
    </Flex>
  </Center>
);

export default PageClient;
