'use client';

import { Button, Center, Flex, Heading, Text } from '@chakra-ui/react';
import layoutConfig from './_config/layout';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Center width="100%">
      <Flex
        flexDirection="column"
        alignItems="center"
        gap="24px"
        maxWidth={layoutConfig.maxWidth}
      >
        <Heading
          as="h1"
          size={{ base: 'md', md: 'lg', lg: 'lg' }}
          marginX={{ base: 'auto', md: '0', lg: '0' }}
        >
          Something went wrong!
        </Heading>
        <Text as="samp">{error.message}</Text>
        <Button type="button" variant="outline" onClick={() => reset()}>
          Try again
        </Button>
      </Flex>
    </Center>
  );
}
