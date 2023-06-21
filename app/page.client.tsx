'use client';

import { Center, Flex, Heading } from '@chakra-ui/react';
import ModuleLaunchPad from './ModuleLaunchPad';

const PageClient = () => (
  <Center width="100%">
    <Flex flexDirection="column" gap="24px" width="100%" maxWidth="1500px">
      <Heading as="h1" size="lg">
        Elite Dangerous Pilots Network
      </Heading>
      <ModuleLaunchPad />
    </Flex>
  </Center>
);

export default PageClient;
