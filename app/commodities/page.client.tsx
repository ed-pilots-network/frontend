'use client';

import { Center, Flex, Heading, Select, FormLabel } from '@chakra-ui/react';

const PageClient = ({ commodities }: { commodities: string[] }) => {
  const formattedCommodities = commodities.map((commodity) =>
    commodity.slice(3).split('_').join(' ').toLocaleUpperCase(),
  );

  return (
    <Center width="100%">
      <Flex flexDirection="column" gap="24px" width="100%" maxWidth="1500px">
        <Heading
          as="h1"
          size={{ base: 'md', md: 'lg', lg: 'lg' }}
          marginX={{ base: 'auto', md: '0', lg: '0' }}
        >
          Find Commodity
        </Heading>
        <FormLabel>Commodity</FormLabel>
        <Select placeholder="Select option">
          {formattedCommodities.map((commodity, index) => (
            <option key={index} value={commodity}>
              {commodity}
            </option>
          ))}
        </Select>
      </Flex>
    </Center>
  );
};

export default PageClient;
