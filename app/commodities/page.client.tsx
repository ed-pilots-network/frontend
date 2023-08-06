'use client';

import { useState } from 'react';
import {
  Box,
  Center,
  Heading,
  VStack,
  HStack,
  Spinner,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import Form, { SubmitProps } from '@/components/commodities/Form';
import useColorMode from '@/app/_hooks/useColorMode';
import selectColor from '@/app/_hooks/fontColorSelector';
import { ICommodity, ICommodityFormResponse } from '@/app/_types/commodity';

interface IPageClientProps {
  commodities: ICommodity[] | null;
}

const PageClient: React.FC<IPageClientProps> = ({ commodities }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<Error | null>(null);
  const [commodityResponse, setCommodityResponse] = useState<
    ICommodityFormResponse[]
  >([]);
  const { isDark } = useColorMode();

  const handleSubmit = async (data: SubmitProps) => {
    setIsLoading(true);
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
    }
  };

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
    if (commodityResponse.length === 0) {
      return <div>No results!</div>;
    }
    if (commodityResponse.length > 0) {
      commodityResponse.map((commodity: ICommodityFormResponse) => (
        <div key={commodity.commodityDisplayName}>
          Commodity Name: {commodity.commodityDisplayName}
        </div>
      ));
    }
    return (
      <Alert status="warning">
        <AlertIcon />
        Commodity Not Found!
      </Alert>
    );
  };

  return (
    <>
      <Center width="100%">
        <VStack align="stretch">
          <HStack spacing={4}>
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
          </HStack>
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
        </VStack>
      </Center>
      {renderCommodityData()}
    </>
  );
};

export default PageClient;
