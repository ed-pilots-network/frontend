'use client';

import { useState } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Form, { SubmitProps } from '@/components/commodities/Form';
import useColorMode from '@/app/_hooks/useColorMode';
import selectColor from '@/app/_hooks/fontColorSelector';
import SampleGridResponse from '../_components/commodities/SampleGridResponse';

interface ReqBody extends Omit<SubmitProps, 'commodityId' | 'system'> {
  commodityId: string;
  referenceLocation: {
    xcoordinate: number;
    ycoordinate: number;
    zcoordinate: number;
  };
  system?: string;
}

const PageClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isDark } = useColorMode();

  const handleSubmit = (data: SubmitProps) => {
    setIsLoading(true);
    const formatString = (string: string) =>
      string.split(' ').join('_').toLowerCase();

    let submitData: ReqBody = {
      ...data,
      commodityId: formatString(data.commodityId.value),
      minDemand: Number(data.minDemand),
      minSupply: Number(data.minSupply),
      referenceLocation: {
        xcoordinate: 0,
        ycoordinate: 0,
        zcoordinate: 0,
      },
    };
    delete submitData.system;

    // TODO: submit data to backend
    setTimeout(() => {
      console.log('submitted ', submitData);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Flex flexDirection="column" gap="24px" width="100%">
      <Box alignSelf="baseline">
        <Heading
          as="h1"
          size={{ base: 'md', md: 'lg', lg: 'lg' }}
          marginX={{ base: 'auto', md: '0', lg: '0' }}
          color={selectColor(isDark, 'accent-text')}
        >
          Commodities
        </Heading>
        <Heading
          as="h2"
          size={{ base: 'xs', md: 'sm', lg: 'sm' }}
          marginX={{ base: 'auto', md: '0', lg: '0' }}
        >
          Find Closest Station to Buy/Sell Commodities
        </Heading>
      </Box>
      <Box
        borderWidth="2px"
        borderRadius="9px"
        borderColor={selectColor(isDark, 'border-accent')}
        padding="1rem"
      >
        <Form onSubmitHandler={handleSubmit} isLoading={isLoading} />
      </Box>
      <SampleGridResponse />
    </Flex>
  );
};

export default PageClient;
