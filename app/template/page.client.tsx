'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import PageHeading from '../_components/utility/pageHeading';
import layoutConfig from '../_config/layout';
import GetColor from '../_hooks/colorSelector';
import { useGetSubmitFormClient } from '../_lib/api-calls';
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

// Import resourse type and create appropriate interface for your data fetched server side in page.tsx here
import { ICommodity } from '@/app/_types/commodity';

interface IProps {
  serverData: ICommodity[];
}

const PageClient: React.FC<IProps> = ({ serverData }) => {
  let queryString = 'trade/commodity/filter?type=WASTE&isRare=false';
  const {
    data: clientResponse,
    isLoading,
    error,
    mutate,
  } = useGetSubmitFormClient(queryString);

  const { handleSubmit } = useForm();

  const onSubmit = async (): Promise<void> => {
    await mutate();
  };

  const displayResults = (clientData: ICommodity[], label: string) => {
    // if the clientData is empty, return a warning that no results were found
    if (clientData.length === 0) {
      return (
        <Alert status="warning" borderRadius="md">
          <AlertIcon />
          No results found!
        </Alert>
      );
    }
    // else return the results: extract this to a component
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
                      fails it throws an error that is caught at the root level
                      and the message defined in ./page.tsx is displayed.
                    </Text>
                    <Text fontSize="lg" marginY={6}>
                      Second, it fetches all waste type commodities client side
                      when the form is submitted.
                    </Text>
                    <Text fontSize="lg" marginY={6}>
                      If you would like to see the server side fetch fail, you
                      can edit the url in page.tsx (simply delete the last{' '}
                      <strong>e </strong>
                      from <strong>false</strong>.)
                    </Text>
                    <Text fontSize="lg" marginY={6}>
                      If you would like to see the client fetch fail, you can
                      edit the query string in ./api/index.tsx in the same
                      manner.
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
          {/* the following renders server fetched data */}
          {displayResults(serverData, 'Fetch weapons server side: ')}
          {/* the following occurs when the client fetch is successful */}
          {clientResponse &&
            displayResults(
              clientResponse,
              'Fetch waste products client side: ',
            )}
          {/* the following occurs when the client fetch fails */}
          {error && (
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
