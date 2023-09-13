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
import getFilterCommodityFromApiClientSide from './api';

export interface ICommoditySchema {
  commodityName: string;
  displayName: string;
  type: string;
  isRare: boolean;
}

interface Props {
  data: ICommoditySchema[];
  status: number;
}

const PageClient: React.FC<Props> = ({ data, status }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitErrorless, setSubmitReq] = useState(true);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [clientResponse, setClientResponse] = useState<Props>();

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<{ submitErrorless: boolean }>();

  const onSubmit = async (): Promise<void> => {
    setClientResponse({ data: [], status: 0 });

    if (submitErrorless) {
      const res = await getFilterCommodityFromApiClientSide({
        setIsLoading,
        setSubmitSuccess,
      });
      const json = await res.json();
      setClientResponse({ data: json, status: res.status });
      setSubmitSuccess(true);
      setIsLoading(false);
    }

    // DELETE THIS BLOCK IN PRODUCTION ROUTES
    if (!submitErrorless) {
      setClientResponse({ data: [], status: 400 });
      setSubmitSuccess(true);
      setIsLoading(false);
    }
  };

  const displayResults = (
    commodityArr: ICommoditySchema[],
    resStatus: number,
    label: string,
    flag: string,
  ) => {
    if (resStatus !== 200) {
      return (
        <Alert status="error" borderRadius="md">
          <AlertIcon />
          Status: {status} - Failed to fetch {flag} data!
        </Alert>
      );
    }
    if (commodityArr.length === 0) {
      return (
        <Alert status="warning" borderRadius="md">
          <AlertIcon />
          No results found!
        </Alert>
      );
    }
    if (commodityArr.length >= 0) {
      return (
        <HStack marginX="auto" gap={10} fontSize="xl">
          <Text>{label}</Text>
          {commodityArr.map((commodity) => (
            <Text key={commodity.commodityName}>{commodity.displayName}</Text>
          ))}
        </HStack>
      );
    }
    return null;
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
                {/* DELETE THIS FORM IN PRODUCTION ROUTES - START */}
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
                        isInvalid={
                          !!errors.submitErrorless || !!errors.submitErrorless
                        }
                      >
                        <FormLabel>Client Fetch Without Error?:</FormLabel>
                        <ButtonGroup
                          isAttached
                          borderColor={GetColor('border')}
                          variant="outline"
                        >
                          <Button
                            variant={submitErrorless ? 'outline' : 'colorless'}
                            onClick={() => setSubmitReq(true)}
                          >
                            Yes
                          </Button>
                          <Button
                            variant={submitErrorless ? 'colorless' : 'outline'}
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
                {/* DELETE THIS FORM IN PRODUCTION ROUTES - END */}
              </Box>
            </VStack>
          </VStack>
          {displayResults(
            data,
            status,
            'Fetch weapons server side: ',
            'server',
          )}
          {submitSuccess &&
            clientResponse &&
            displayResults(
              clientResponse.data,
              clientResponse.status,
              'Fetch waste products client side: ',
              'client',
            )}
        </Flex>
      </Center>
    </Box>
  );
};

export default PageClient;
