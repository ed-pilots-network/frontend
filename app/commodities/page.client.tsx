'use client';

import { useState } from 'react';
import {
  Box,
  Center,
  Heading,
  VStack,
  Alert,
  AlertIcon,
  Flex,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
import Form, { SubmitProps } from '@/components/commodities/Form';
import CommodityFormResponse from '@/components/commodities/CommodityFormResponse';
import CommodityFormResponseMobile from '@/components/commodities/MobileCommodityFormResponse';
import layoutConfig from '../_config/layout';
import GetColor from '@/app/_hooks/colorSelector';
import {
  getLocateCommodityFromApi,
  getLocateCommodityFromMockApi,
} from './api';
import { ICommodity, ICommodityFormResponse } from '@/types/';

interface IPageClientProps {
  commodities: ICommodity[] | null;
}

const PageClient: React.FC<IPageClientProps> = ({ commodities }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isBuying, setIsBuying] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [fetchError, setFetchError] = useState<Error | null>(null);
  const [commodityResponse, setCommodityResponse] = useState<
    ICommodityFormResponse[]
  >([]);

  const [isLarge] = useMediaQuery('(min-width: 1024px)');

  const handleSubmit = async (data: SubmitProps) => {
    const response = await getLocateCommodityFromApi({
      setIsLoading,
      setSubmitted,
      data,
      setIsBuying,
    }).finally(() => {
      setIsLoading(false);
      setSubmitted(true);
    });

    if (response instanceof Error) {
      setFetchError(response as Error);
      return;
    }
    setCommodityResponse(response);
  };

  // TODO: remove this function after development - aslink87
  const handleExampleSubmit = async () => {
    const response = await getLocateCommodityFromMockApi({
      setIsLoading,
      setSubmitted,
    }).finally(() => {
      setIsLoading(false);
      setSubmitted(true);
    });

    if (response instanceof Error) {
      setFetchError(response as Error);
      return;
    }
    setCommodityResponse(response);
  };

  const checkBreakpointBeforeShowingResponse = () => {
    if (isLarge) {
      return (
        <CommodityFormResponse
          // TODO: remove this slice after pagination/truncate is implemented - aslink87
          commodityResponse={commodityResponse.slice(0, 20)}
          isBuying={isBuying}
        />
      );
    }
    return (
      <CommodityFormResponseMobile
        // TODO: remove this slice after pagination/truncate is implemented - aslink87
        commodityResponse={commodityResponse.slice(0, 20)}
        isBuying={isBuying}
      />
    );
  };

  return (
    <Box
      flex="1"
      backgroundImage={`url('/assets/Anaconda_Opacity.svg')`}
      backgroundRepeat="no-repeat"
      backgroundSize={{ base: '0', md: '75%', lg: '50%' }}
      backgroundPosition="center center"
      paddingX={2}
      width="100%"
    >
      <Center
        maxWidth={layoutConfig.maxWidth}
        marginX="auto"
        opacity={0.9}
        paddingY={5}
      >
        <Flex flexDirection="column" gap={6} width="100%">
          <VStack align="stretch" gap={6}>
            <Flex direction="column" gap={2}>
              <Box alignSelf="baseline">
                <Heading
                  as="h1"
                  size={{ base: 'md', md: 'lg', lg: 'lg' }}
                  marginX={{ base: 'auto', md: '0', lg: '0' }}
                  color={GetColor('accent-text')}
                >
                  Commodities
                </Heading>
              </Box>
              <Box alignSelf="baseline">
                <Heading
                  as="h2"
                  size={{ base: 'xs', md: 'sm', lg: 'sm' }}
                  marginX={{ base: 'auto', md: '0', lg: '0' }}
                  textAlign={{ base: 'center', sm: 'left', md: 'left' }}
                >
                  Find Closest Station to Buy/Sell Commodities
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
              <Form
                onSubmitHandler={handleSubmit}
                isLoading={isLoading}
                commodities={commodities}
              />
            </Box>
            {/* TODO: remove this button after development - aslink87 */}
            <Button
              type="button"
              variant="outline"
              id="example"
              onClick={handleExampleSubmit}
            >
              Submit Example
            </Button>
          </VStack>
          {fetchError && (
            <Alert status="error">
              <AlertIcon />
              Failed to fetch commodity data!
            </Alert>
          )}
          {submitted && commodityResponse.length === 0 && (
            <Alert status="warning">
              <AlertIcon />
              Commodity Not Found!
            </Alert>
          )}
          {submitted &&
            commodityResponse.length > 0 &&
            checkBreakpointBeforeShowingResponse()}
        </Flex>
      </Center>
    </Box>
  );
};

export default PageClient;
