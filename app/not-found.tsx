'use client';

import NextLink from 'next/link';
import { Button, Center, Flex, Heading } from '@chakra-ui/react';
import layoutConfig from './_config/layout';

export default function NotFound() {
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
          404 - Page Not Found
        </Heading>
        <NextLink href="/" passHref>
          <Button type="button" variant="outline">
            Go back Home
          </Button>
        </NextLink>
      </Flex>
    </Center>
  );
}
