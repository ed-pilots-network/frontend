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
} from '@chakra-ui/react';
import useColorMode from '@/app/_hooks/useColorMode';
import selectColor from '@/app/_hooks/fontColorSelector';
import { ICommodity, ICommodityFormResponse } from '@/app/_types/commodity';
import Form, { SubmitProps } from '@/components/commodities/Form';
import CommodityFormResponse from '@/components/commodities/CommodityFormResponse';
import layoutConfig from '../_config/layout';

interface IPageClientProps {
  commodities: ICommodity[] | null;
}

const PageClient: React.FC<IPageClientProps> = ({ commodities }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fetchError, setFetchError] = useState<Error | null>(null);
  const [commodityResponse, setCommodityResponse] = useState<
    ICommodityFormResponse[]
  >([]);
  const { isDark } = useColorMode();

  const handleSubmit = async (data: SubmitProps) => {
    setIsLoading(true);
    setSubmitted(false);

    let submitData = `commodityDisplayName=${data.commodityDisplayName.value
      .split(' ')
      .join('%20')}&maxLandingPadSize=${data.maxLandingPadSize}&minSupply=${
      data.minSupply
    }&minDemand=${data.minDemand}&includeFleetCarriers=${
      data.includeFleetCarriers
    }&includeOdyssey=${data.includeOdyssey}&includePlanetary=${
      data.includePlanetary
    }&x=0&y=0&z=0`;

    try {
      const commodityReq = await fetch(
        `/api/v1/trade/locate-commodity/filter?${submitData}`,
      );
      const commodityRes = await commodityReq.json();
      setCommodityResponse(commodityRes);
    } catch (error) {
      setFetchError(error as Error);
    } finally {
      setIsLoading(false);
      setSubmitted(true);
    }
  };

  // TODO: remove this function after development - aslink87
  const handleExampleSubmit = async () => {
    setIsLoading(true);
    setSubmitted(false);

    try {
      const commodityReq = await fetch(
        `${process.env.NEXT_PUBLIC_MOCK_API_URL}/api/v1/trade/commodity`,
        {
          cache: 'no-store',
        },
      );
      const commodityRes = await commodityReq.json();
      setCommodityResponse(commodityRes);
    } catch (error) {
      setFetchError(error as Error);
    } finally {
      setIsLoading(false);
      setSubmitted(true);
    }
  };

  const renderCommodityData = () => {
    if (fetchError) {
      return (
        <Alert status="error">
          <AlertIcon />
          Failed to fetch commodity data!
        </Alert>
      );
    }
    if (submitted && commodityResponse.length === 0) {
      return (
        <Alert status="warning">
          <AlertIcon />
          Commodity Not Found!
        </Alert>
      );
    }
    if (submitted && commodityResponse.length > 0) {
      return (
        <CommodityFormResponse
          // TODO: remove this slice after pagination is implemented - aslink87
          commodityResponse={commodityResponse.slice(0, 20)}
        />
      );
    }
    return null;
  };

  return (
    <Box
      p={5}
      flex="1"
      as="main"
      backgroundImage={`url('/assets/Anaconda_Opacity.svg')`}
      backgroundRepeat="no-repeat"
      backgroundSize={{ base: 'contain', sm: '0', lg: '50%' }}
      backgroundPosition="center center"
    >
      <Center maxWidth={layoutConfig.maxWidth} marginX="auto" opacity={0.8}>
        <Flex flexDirection="column" gap={6} width="100%">
          <VStack align="stretch" gap={6}>
            <Flex direction="column" gap={2}>
              <Box alignSelf="baseline">
                <Heading
                  as="h1"
                  size={{ base: 'md', md: 'lg', lg: 'lg' }}
                  marginX={{ base: 'auto', md: '0', lg: '0' }}
                  color={selectColor(isDark, 'accent-text')}
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
              borderColor={selectColor(isDark, 'border')}
              bg={selectColor(isDark, 'accent-bg')}
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
              variant="customButton"
              id="example"
              onClick={handleExampleSubmit}
            >
              Submit Example
            </Button>
          </VStack>
          {renderCommodityData()}
        </Flex>
      </Center>
    </Box>
  );
};

export default PageClient;
