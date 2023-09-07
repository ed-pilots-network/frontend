'use client';

import { useState } from 'react';
import { Box, HStack, Heading, Flex, Button } from '@chakra-ui/react';
import Form, { SubmitProps } from '@/components/trade-routes/single/Form';
import GetColor from '@/app/_hooks/colorSelector';
import { SingleTradeRouteForm } from '@/app/_types/forms';
import { ICommodity } from '@/app/_types';

interface IPageClientProps {
  commodities: ICommodity[] | null;
}

const PageClient = ({ commodities }: IPageClientProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [mockStation, setMockStations] = useState<{ name: string }[]>([]);

  const handleSubmit = (data: SubmitProps) => {
    setIsLoading(true);

    let submitData: SingleTradeRouteForm = {
      ...data,
    };

    // TODO: submit data to backend
    setTimeout(() => {
      console.log('submitted ', submitData);
      setIsLoading(false);
    }, 2000);
  };

  const fetchMockStations = async () => {
    setIsLoading(true);

    try {
      const mockStationsReq = await fetch(
        `${process.env.NEXT_PUBLIC_MOCK_API_URL}/api/v1/exploration/station/filter`,
        {
          cache: 'no-store',
        },
      );
      const mockStationsJson = await mockStationsReq.json();
      setMockStations(mockStationsJson);
    } catch (error) {
      // handle error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex flexDirection="column" gap="24px" width="100%">
      <HStack spacing={4}>
        <Box alignSelf="baseline">
          <Heading
            as="h1"
            size={{ base: 'md', md: 'lg', lg: 'lg' }}
            marginX={{ base: 'auto', md: '0', lg: '0' }}
            color={GetColor('accent-text')}
          >
            Single Trade Route Finder
          </Heading>
        </Box>
      </HStack>
      <Box
        borderWidth="2px"
        borderRadius="9px"
        borderColor={GetColor('border')}
        padding="1rem"
      >
        <Form
          onSubmitHandler={handleSubmit}
          isLoading={isLoading}
          commodities={commodities}
        />
      </Box>
      <Button
        type="button"
        variant="outline"
        id="example"
        onClick={fetchMockStations}
      >
        Fetch Mock Stations
      </Button>
      {mockStation.length > 0 &&
        mockStation.map((station) => <p key={station.name}>{station.name}</p>)}
    </Flex>
  );
};

export default PageClient;
