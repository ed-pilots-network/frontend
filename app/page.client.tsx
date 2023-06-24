'use client';

import { Center, Flex, Heading } from '@chakra-ui/react';
import ModuleLaunchPad from './_components/module-launch-pad/ModuleLaunchPad';

const PageClient = () => (
  <Center width="100%">
    <Flex flexDirection="column" gap="24px" width="100%" maxWidth="1500px">
      <Heading
        as="h1"
        size={{ base: 'md', md: 'lg', lg: 'lg' }}
        marginX={{ base: 'auto', md: '0', lg: '0' }}
      >
        Elite Dangerous Pilots Network
      </Heading>
      <ModuleLaunchPad />
    </Flex>
  </Center>
);

export default PageClient;
