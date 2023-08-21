import React from 'react';

import { GridItem, SimpleGrid, VStack } from '@chakra-ui/react';
import selectColor from '@/app/_hooks/fontColorSelector';
import useColorMode from '@/app/_hooks/useColorMode';

const SampleGridResponse: React.FC = () => {
  const { isDark } = useColorMode();

  const exampleData = [
    {
      price: 420,
      supply: 467320,
      system: 'Smelly System',
      station: 'Orbital Station',
      range: '3,500 ls',
      distance: '23 ly',
      update: '2 hrs',
    },
    {
      price: 419,
      supply: 53280,
      system: 'Bright System',
      station: 'Technical Station',
      range: '1,500 ls',
      distance: '26 ly',
      update: '6 hrs',
    },
    {
      price: 427,
      supply: 23000,
      system: 'Advanced System',
      station: 'Rundown Station',
      range: '10,400 ls',
      distance: '28 ly',
      update: '2 days',
    },
    {
      price: 415,
      supply: 6889,
      system: 'Two Sun System',
      station: 'Rocky Station',
      range: '800 ls',
      distance: '29 ly',
      update: '13 hrs',
    },
    {
      price: 417,
      supply: 238923,
      system: 'Black Hole System',
      station: 'Doomed Station',
      range: '12,800 ls',
      distance: '31 ly',
      update: '2 days',
    },
    {
      price: 430,
      supply: 1588,
      system: 'Another Great System',
      station: 'Shitty Station',
      range: '2,200 ls',
      distance: '32 ly',
      update: '1 day',
    },
    {
      price: 426,
      supply: 13655,
      system: 'Boring System',
      station: 'Greasy Station',
      range: '1,100 ls',
      distance: '35 ly',
      update: '8 hrs',
    },
  ];

  return (
    <VStack
      maxWidth="1400px"
      width="100%"
      borderWidth="2px"
      borderRadius="9px"
      borderColor={selectColor(isDark, 'border')}
      // bg={selectColor(isDark, 'accent-bg')}
      padding="1rem"
    >
      {exampleData.map((data) => (
        <SimpleGrid
          key={data.system}
          columns={[5, 7]}
          width="100%"
          fontSize="sm"
          _odd={{
            background: `${selectColor(isDark, 'grid-accent')}`,
          }}
          padding={2}
          borderRadius="9px"
        >
          <GridItem>CR {data.price}</GridItem>
          <GridItem textAlign="right" paddingRight={8}>
            {data.supply}
          </GridItem>
          <GridItem width="max-content" minWidth="180px">
            {data.system}
          </GridItem>
          <GridItem
            display="flex"
            flexWrap="nowrap"
            width="max-content"
            minWidth="150px"
            gap={1}
            hideBelow="md"
          >
            {data.station}
          </GridItem>
          <GridItem hideBelow="lg" textAlign="right" paddingRight={4}>
            {data.range}
          </GridItem>
          <GridItem textAlign="right" paddingRight={4}>
            {data.distance}
          </GridItem>
          <GridItem textAlign="right" paddingRight={4}>
            {data.update}
          </GridItem>
        </SimpleGrid>
      ))}
    </VStack>
  );
};

export default SampleGridResponse;
