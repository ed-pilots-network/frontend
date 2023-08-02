'use client';

import {
  Alert,
  AlertIcon,
  Center,
  Code,
  Flex,
  Heading,
  Spinner,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import { ICommodity, IPost } from '../_types';

interface PageClientProps {
  posts: IPost[];
  commodity: ICommodity | null;
}

const PageClient = ({ posts, commodity }: PageClientProps) => {
  const [clientCommodity, setClientCommodity] = useState<
    ICommodity | undefined
  >(undefined);
  const [fetchError, setFetchError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/v1/trade/commodity/Beer', { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setClientCommodity(data);
      })
      .catch((error) => {
        setFetchError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const renderCommodityData = () => {
    if (isLoading) {
      return <Spinner />;
    }
    if (fetchError) {
      return (
        <Alert status="error">
          <AlertIcon />
          Failed to fetch commodity data from staging server on client side
        </Alert>
      );
    }
    if (clientCommodity) {
      return <div>Commodity Name: {clientCommodity.commodityName}</div>;
    }
    return (
      <Alert status="warning">
        <AlertIcon />
        Commodity Not Found!
      </Alert>
    );
  };

  return (
    <Center width="100%">
      <Flex flexDirection="column" gap="24px" width="100%" maxWidth="1500px">
        <Heading as="h1" size="lg">
          Playground
        </Heading>
        Developer playground for examples of component or feature use.
        <Heading as="h2" size="md" color="orange">
          Server Side Data Fetch
        </Heading>
        <p>
          All server side calls work without having to handle CORS through a
          proxy, since these calls trigger from the server side and not the
          browser.
        </p>
        <Heading as="h2" size="md">
          Mock Server API - POST
        </Heading>
        <p>
          This approach allows you to call the JSON mock API server running
          locally. You need to run <Code>yarn dev-api</Code> to connect to this
          server.
        </p>
        <Code whiteSpace="pre">
          {`
  fetch(\`\${process.env.NEXT_PUBLIC_MOCK_API_URL}/posts\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category: 'json' }),
    });
  }
          `}
        </Code>
        <Heading as="h3" size="sm">
          Response
        </Heading>
        {posts?.map((item) => (
          <div key={item.id}>
            <p>Post Title: {item.title}</p>
            <p>Author: {item.author}</p>
          </div>
        )) ?? (
          <Alert status="error">
            <AlertIcon />
            Failed to fetch post data from staging server on server side
          </Alert>
        )}
        <Heading as="h2" size="md">
          Staging Server API
        </Heading>
        <Code whiteSpace="pre">
          {`
  fetch(\`\${process.env.NEXT_PUBLIC_STAGING_API_URL}/api/v1/trade/commodity/\${name}\`);
          `}
        </Code>
        <p>
          This approach allows you to call the hosted backend staging server.
          e.g., Morris API running on our Backend service. You can connect to
          this without running the local JSON mock API i.e., just run{' '}
          <Code>yarn dev</Code>. It will work even if you are running the JSON
          mock API server.
        </p>
        <Heading as="h3" size="sm">
          Response
        </Heading>
        {commodity ? (
          <div>
            <p>Commodity Name: {commodity.commodityName}</p>
          </div>
        ) : (
          <Alert status="error">
            <AlertIcon />
            Failed to fetch commodity data from staging server on server side
          </Alert>
        )}
        <Heading as="h2" size="md" color="orange">
          Client Side Data Fetch
        </Heading>
        <p>
          All client side calls need to handle CORS, this is where the Next JS
          proxy config comes handy. When you call fetch without a hostname, the
          proxy config picks on the path and routes it to the backend as a
          server side call.
        </p>
        <Heading as="h2" size="md">
          Staging Server API
        </Heading>
        <Code whiteSpace="pre">
          {`
  fetch('/api/v1/trade/commodity/Beer')
          `}
        </Code>
        <Heading as="h3" size="sm">
          Response
        </Heading>
        {renderCommodityData()}
      </Flex>
    </Center>
  );
};

export default PageClient;
