'use client';

import { Alert, AlertIcon, Center, Flex, Heading } from '@chakra-ui/react';

interface PageClientProps {
  posts: {
    id: number;
    title: string;
    author: string;
  }[];
}

const PageClient = ({ posts }: PageClientProps) => (
  <Center width="100%">
    <Flex flexDirection="column" gap="24px" width="100%" maxWidth="1500px">
      <Heading
        as="h1"
        size={{ base: 'md', md: 'lg', lg: 'lg' }}
        marginX={{ base: 'auto', md: '0', lg: '0' }}
      >
        Playground
      </Heading>
      Developer playground for examples of component or feature use.
      <Heading
        as="h2"
        size={{ base: 'xs', md: 'sm', lg: 'md' }}
        marginX={{ base: 'auto', md: '0', lg: '0' }}
      >
        Server Side Data Fetch
      </Heading>
      {posts ? (
        posts.map((item) => (
          <div key={item.id}>
            <p>Post Title: {item.title}</p>
            <p>Author: {item.author}</p>
          </div>
        ))
      ) : (
        <Alert status="error">
          <AlertIcon />
          Failed to fetch post data
        </Alert>
      )}
    </Flex>
  </Center>
);

export default PageClient;
