'use client';

import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import ModuleLaunchPad from './_components/module-launch-pad/ModuleLaunchPad';
import layoutConfig from './_config/layout';

const PageClient = () => (
  <Box flex="1" as="main" paddingX={2}>
    <Center maxWidth={layoutConfig.maxWidth} marginX="auto" p={5}>
      <Flex flexDirection="column" gap="24px" width="100%">
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
  </Box>
);

export default PageClient;
