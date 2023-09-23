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
  useMediaQuery,
} from '@chakra-ui/react';
import Form, { SubmitProps } from '@/components/commodities/Form';
import CommodityFormResponse from '@/components/commodities/CommodityFormResponse';
import CommodityFormResponseMobile from '@/components/commodities/MobileCommodityFormResponse';
import GetColor from '@/app/_hooks/colorSelector';
import layoutConfig from '../_config/layout';
import { useGetMockSubmitFormClient } from '../_lib/api-calls';
import { ICommodity } from '@/types/';

interface IPageClientProps {
  commodities: ICommodity[];
}

const PageClient: React.FC<IPageClientProps> = ({ commodities }) => {
  const [isBuying, setIsBuying] = useState(true);
  const [queryString, setQueryString] = useState('');
  const {
    data: clientResponse,
    isLoading,
    error,
    mutate,
  } = useGetMockSubmitFormClient(queryString);

  const [isLarge] = useMediaQuery('(min-width: 1024px)');

  const handleSubmit = async (data: SubmitProps): Promise<void> => {
    setQueryString('trade/commodity');
    //   setQueryString(
    //     `commodityDisplayName=${data.commodityDisplayName.value
    //       .split(' ')
    //       .join('%20')}&maxLandingPadSize=${data.maxLandingPadSize}&minSupply=${
    //       data.minSupply
    //     }&minDemand=${data.minDemand}&includeFleetCarriers=${
    //       data.includeFleetCarriers
    //     }&includeOdyssey=${data.includeOdyssey}&includePlanetary=${
    //       data.includePlanetary
    //     }&x=0&y=0&z=0`,
    //   );
    if (data.minDemand === 0) setIsBuying(true);
    if (data.minSupply === 0) setIsBuying(false);

    if (queryString !== '') await mutate();
  };

  const checkBreakpointBeforeShowingResponse = () => {
    if (isLarge) {
      return (
        <CommodityFormResponse
          // TODO: remove this slice after pagination/truncate is implemented - aslink87
          commodityResponse={clientResponse.slice(0, 20)}
          isBuying={isBuying}
        />
      );
    }
    return (
      <CommodityFormResponseMobile
        // TODO: remove this slice after pagination/truncate is implemented - aslink87
        commodityResponse={clientResponse.slice(0, 20)}
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
          </VStack>
          {error && (
            <Alert status="error">
              <AlertIcon />
              Failed to fetch commodity data!
            </Alert>
          )}
          {clientResponse?.length === 0 && (
            <Alert status="warning">
              <AlertIcon />
              Commodity Not Found!
            </Alert>
          )}
          {clientResponse?.length > 0 && checkBreakpointBeforeShowingResponse()}
        </Flex>
      </Center>
    </Box>
  );
};

export default PageClient;
