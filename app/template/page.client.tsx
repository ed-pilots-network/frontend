'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import getFilterCommodityFromApiClientSide from './api';
import layoutConfig from '../_config/layout';
import GetColor from '../_hooks/colorSelector';

export interface ICommoditySchema {
  commodityName: string;
  displayName: string;
  type: string;
  isRare: boolean;
}

interface Props {
  serverData: ICommoditySchema[];
}

const PageClient: React.FC<Props> = ({ serverData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [clientResponse, setClientResponse] = useState<
    ICommoditySchema[] | null
  >(null);

  const { handleSubmit } = useForm();

  const onSubmit = async (): Promise<void> => {
    setClientResponse(null);

    const res = await getFilterCommodityFromApiClientSide({
      setIsLoading,
    });
    const json = await res.json();
    setClientResponse(json);
    setIsLoading(false);
  };

  const displayResults = (clientData: ICommoditySchema[], label: string) => {
    if (clientData.length === 0) {
      return (
        <Alert status="warning" borderRadius="md">
          <AlertIcon />
          No results found!
        </Alert>
      );
    }
    return (
      <Stack
        direction={{
          base: 'column',
          sm: 'column',
          md: 'column',
          lg: 'row',
        }}
        width="100%"
        spacing={8}
        fontSize="xl"
      >
        <Text>{label}</Text>
        {clientData.map((item) => (
          <Text key={item.commodityName}>{item.displayName}</Text>
        ))}
      </Stack>
    );
  };

  return (
    <Box flex="1" paddingX={2} width="100%">
      <Center
        maxWidth={layoutConfig.maxWidth}
        marginX="auto"
        opacity={0.9}
        paddingY={5}
      >
        <Flex flexDirection="column" gap={6} width="100%">
          <VStack align="stretch" maxWidth={layoutConfig.maxWidth} paddingY={5}>
            <VStack align="stretch" gap={6}>
              <Flex direction="column" gap={2}>
                <Box alignSelf="baseline">
                  <Heading
                    as="h1"
                    size={{ base: 'md', md: 'lg', lg: 'lg' }}
                    marginX={{ base: 'auto', md: '0', lg: '0' }}
                    color={GetColor('accent-text')}
                  >
                    Heading goes here
                  </Heading>
                </Box>
                <Box alignSelf="baseline">
                  <Heading
                    as="h2"
                    size={{ base: 'xs', md: 'sm', lg: 'sm' }}
                    marginX={{ base: 'auto', md: '0', lg: '0' }}
                    textAlign={{ base: 'center', sm: 'left', md: 'left' }}
                  >
                    Subheading sentence goes here
                  </Heading>
                </Box>
              </Flex>
              <Box
                borderWidth="2px"
                borderRadius="9px"
                borderColor={GetColor('border')}
                bg={GetColor('')}
                padding="1rem"
              >
                {/* DELETE THIS FORM IN PRODUCTION ROUTES */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    paddingBottom="8"
                    flexWrap="wrap"
                    direction={{
                      base: 'column',
                      sm: 'column',
                      md: 'column',
                      lg: 'row',
                    }}
                  >
                    <Text fontSize="lg">
                      This template route fetches data in a few ways. First, it
                      fetches all weapon type commodities on the server side and
                      passes the result as props. If that server side fetch
                      fails it throws and error that is caught at the root level
                      and the message defined in ./page.tsx is displayed.
                    </Text>
                    <Text fontSize="lg" marginY={6}>
                      Second, it fetches all waste type commodities client side
                      when the form is submitted so long as the switch is set to
                      yes. When the switch is set to no, the client side fetch
                      fails and displays an error message.
                    </Text>
                    <Text fontSize="lg" marginBottom={6}>
                      Below the form is a display of the results from the
                      server, as well as the client side fetch result.
                    </Text>
                  </Flex>
                  <Button
                    type="submit"
                    variant="submit"
                    id="submit"
                    isLoading={isLoading}
                  >
                    Submit
                  </Button>
                </form>
              </Box>
            </VStack>
          </VStack>
          {displayResults(serverData, 'Fetch weapons server side: ')}
          {clientResponse &&
            displayResults(
              clientResponse,
              'Fetch waste products client side: ',
            )}
        </Flex>
      </Center>
    </Box>
  );
};

export default PageClient;
