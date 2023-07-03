'use client';

import { Box, Center, Flex, FormLabel, Heading, Input } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import Form from '@/components/commodities/Form';
import useColorMode from '@/app/_hooks/useColorMode';
import selectColor from '@/app/_hooks/fontColorSelector';

const PageClient = ({ commodities }: { commodities: string[] }) => {
  const [commoditySearchString, setCommoditySearchString] = useState('');
  const matchArray = useRef<string[]>([]);
  const { isDark } = useColorMode();

  useEffect(() => {
    // If the search string is longer than 3 characters, filter the commodities according to the search string
    // the results will be presented as radio buttons in the form
    if (commoditySearchString.length > 3) {
      let filteredSearch = commoditySearchString.toLocaleLowerCase().trim();
      matchArray.current = [];

      commodities.filter((commodity) => {
        if (commodity.startsWith(filteredSearch)) {
          matchArray.current.push(commodity);
        }
        return null;
      });
    }
  }, [commoditySearchString, commodities]);

  return (
    <Center width="100%">
      <Flex flexDirection="column" gap="24px" width="100%" maxWidth="1500px">
        <Heading
          as="h1"
          size={{ base: 'md', md: 'lg', lg: 'lg' }}
          marginX={{ base: 'auto', md: '0', lg: '0' }}
        >
          Find Closest Station to Buy/Sell Commodities
        </Heading>
        <Box
          borderWidth="1px"
          borderRadius="9px"
          borderColor={selectColor(isDark, 'text')}
          p="1rem"
        >
          <FormLabel>Commodity</FormLabel>
          <Input
            variant="filled"
            placeholder="Search through the commodity list..."
            value={commoditySearchString}
            onChange={(e) => setCommoditySearchString(e.target.value)}
            aria-label="commodity-search-input"
          />
          <Form commodityValues={matchArray.current} />
        </Box>
      </Flex>
    </Center>
  );
};

export default PageClient;
