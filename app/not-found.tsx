'use client';

import NextLink from 'next/link';
import { Link, Center, Flex, Heading } from '@chakra-ui/react';
import GetColor from '@/app/_hooks/colorSelector';

export default function NotFound() {
  return (
    <Center width="100%">
      <Flex
        flexDirection="column"
        alignItems="center"
        gap="24px"
        maxWidth="1500px"
      >
        <Heading
          as="h1"
          size={{ base: 'md', md: 'lg', lg: 'lg' }}
          marginX={{ base: 'auto', md: '0', lg: '0' }}
        >
          404 - Page Not Found
        </Heading>
        <NextLink href="/" passHref>
          <Link color={GetColor('textSelected')} href="#">
            Go back Home
          </Link>
        </NextLink>
      </Flex>
    </Center>
  );
}
