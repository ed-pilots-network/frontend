'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import layoutConfig from '../_config/layout';
import GetColor from '../_hooks/colorSelector';
import getFilterCommodityFromApi from './api';

interface IResponse {
  commodityName: string;
  displayName: string;
  type: string;
  isRare: boolean;
}

const PageClient: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitReq, setSubmitReq] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [fetchError, setFetchError] = useState<Response | null>(null);
  const [response, setResponse] = useState<IResponse[]>([]);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<{ submitReq: boolean }>();

  const onSubmit = async (): Promise<void> => {
    if (!submitReq) {
      setResponse([]);
      setSubmitted(true);
      setFetchError(null);
    }
    if (submitReq) {
      const res = await getFilterCommodityFromApi({
        setIsLoading,
        setSubmitted,
      });
      if (!res.ok) {
        setFetchError(res);
        setResponse([]);
        setIsLoading(false);
        setSubmitted(true);
        return;
      }
      const json = await res.json();
      setResponse(json);
      setFetchError(null);
      setSubmitted(true);
      setIsLoading(false);
    }
  };

  const displayResults = () => (
    <HStack marginX="auto" gap={10} fontSize="xl">
      <Text>Waste Commodities:</Text>
      {response.map((commodity) => (
        <Text key={commodity.commodityName}>{commodity.displayName}</Text>
      ))}
    </HStack>
  );

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
                    <Stack
                      direction={{
                        base: 'column',
                        sm: 'column',
                        md: 'column',
                        lg: 'row',
                      }}
                      width="100%"
                      spacing={4}
                    >
                      <FormControl
                        width="100%"
                        isInvalid={!!errors.submitReq || !!errors.submitReq}
                      >
                        <FormLabel>Fetch Results?:</FormLabel>
                        <ButtonGroup
                          isAttached
                          borderColor={GetColor('border')}
                          variant="outline"
                        >
                          <Button
                            variant={submitReq ? 'outline' : 'colorless'}
                            onClick={() => setSubmitReq(true)}
                          >
                            Yes
                          </Button>
                          <Button
                            variant={submitReq ? 'colorless' : 'outline'}
                            onClick={() => setSubmitReq(false)}
                          >
                            No
                          </Button>
                        </ButtonGroup>
                      </FormControl>
                    </Stack>
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
          {submitted && response.length > 0 && displayResults()}
          {submitted && !fetchError && response.length === 0 && (
            <Alert status="warning" borderRadius="md">
              <AlertIcon />
              No results found!
            </Alert>
          )}
          {submitted && fetchError && (
            <Alert status="error" borderRadius="md">
              <AlertIcon />
              Failed to fetch data!
            </Alert>
          )}
        </Flex>
      </Center>
    </Box>
  );
};

export default PageClient;
