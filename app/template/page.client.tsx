'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PageHeading from '../_components/utility/pageHeading';
import getFromApiClientSide from './api';
import layoutConfig from '../_config/layout';
import GetColor from '../_hooks/colorSelector';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Flex,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

export interface IServerDataSchema {
  commodityName: string;
  displayName: string;
  type: string;
  isRare: boolean;
}

interface Props {
  serverData: IServerDataSchema[];
}

const PageClient: React.FC<Props> = ({ serverData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [clientResponse, setClientResponse] = useState<
    IServerDataSchema[] | null
  >([]);

  const { handleSubmit } = useForm();

  const onSubmit = async (): Promise<void> => {
    setSubmitted(false);
    setClientResponse([]);

    const res = await getFromApiClientSide({
      setIsLoading,
    });

    if (!res.ok) {
      setClientResponse(null);
      setSubmitted(true);
      setIsLoading(false);
      return;
    }
    const json = await res.json();
    setClientResponse(json);
    setSubmitted(true);
    setIsLoading(false);
  };

  const displayResults = (clientData: IServerDataSchema[], label: string) => {
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
        <List display="flex" gap={8}>
          {clientData.map((item) => (
            <ListItem key={item.commodityName}>{item.displayName}</ListItem>
          ))}
        </List>
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
              <PageHeading
                heading="Heading goes here"
                subheading="Subheading sentence goes here"
              />
              <Box
                borderWidth="2px"
                borderRadius="9px"
                borderColor={GetColor('border')}
                bg={GetColor('')}
                padding="1rem"
              >
                {/* DELETE THIS FORM IN PRODUCTION ROUTES, IT SHOULD BE IN A SAPARATE COMPONENT */}
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
            submitted &&
            displayResults(
              clientResponse,
              'Fetch waste products client side: ',
            )}
          {!clientResponse && submitted && (
            <Alert status="error" borderRadius="md">
              <AlertIcon />
              Failed to fetch data, try again or wait until later!
            </Alert>
          )}
        </Flex>
      </Center>
    </Box>
  );
};

export default PageClient;
