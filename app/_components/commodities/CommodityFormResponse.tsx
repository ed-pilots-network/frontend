import React, { useState } from 'react';

import {
  Flex,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import layoutConfig from '@/app/_config/layout';
import selectColor from '@/app/_hooks/fontColorSelector';
import useColorMode from '@/app/_hooks/useColorMode';
import { ICommodityFormResponse } from '@/app/_types/commodity';
import { formatThousands } from '@/app/_hooks/textFormatting';
import {
  renderStationTypeIcon,
  legendItems,
  calculateTimeDifference,
  renderGridHeading,
  gridHeadings,
} from './helpers';

interface ICommodityFormResponseProps {
  commodityResponse: ICommodityFormResponse[];
  isBuying: boolean;
}

interface ILegendIcons {
  text: string;
  src: string;
  alt: string;
}

const CommodityFormResponse: React.FC<ICommodityFormResponseProps> = ({
  commodityResponse,
  isBuying,
}) => {
  const [filter, setFilter] = useState(
    'distance' as keyof ICommodityFormResponse,
  );
  const [ascending, setAscending] = useState(true);
  const { isDark } = useColorMode();

  const compareNumbers = (a: number, b: number) => {
    if (filter === 'sellPrice' || filter === 'supply') {
      if (ascending) return b - a;
      return a - b;
    }
    if (filter === 'buyPrice' || filter === 'demand') {
      if (ascending) return b - a;
      return a - b;
    }
    return a - b;
  };

  return (
    <VStack
      maxWidth={layoutConfig.maxWidth}
      width="100%"
      marginX="auto"
      opacity={0.9}
      borderWidth="2px"
      borderRadius="9px"
      borderColor={selectColor(isDark, 'border')}
      bg={selectColor(isDark, 'accent-bg')}
      padding="1rem"
    >
      <Heading as="h2" size="md">
        Commodity: {commodityResponse[0]?.commodityDisplayName}
      </Heading>
      <HStack>
        <Heading as="h3" size="sm">
          Legend:
        </Heading>
        <Flex gap={4}>
          {legendItems.map((item: ILegendIcons, index: number) => (
            <HStack key={index}>
              <Text>{item.text}: </Text>
              <Image
                src={item.src}
                alt={item.alt}
                boxSize="20px"
                backgroundSize="initial"
                backgroundPosition="200px 0px"
              />
            </HStack>
          ))}
        </Flex>
      </HStack>
      <SimpleGrid
        columns={[1, 3, 7]}
        width="100%"
        fontWeight="bold"
        borderBottom="1px"
        borderColor={selectColor(isDark, 'border')}
        rowGap={1}
      >
        {gridHeadings.map((heading) =>
          renderGridHeading(
            heading.text,
            filter,
            setFilter,
            ascending,
            setAscending,
            heading.sort,
            isBuying,
          ),
        )}
      </SimpleGrid>
      {commodityResponse.length > 0 &&
        commodityResponse
          .sort((a: ICommodityFormResponse, b: ICommodityFormResponse) =>
            compareNumbers(a[filter] as number, b[filter] as number),
          )
          .map((commodity, index) => (
            <SimpleGrid key={index} columns={[1, 3, 7]} width="100%" rowGap={1}>
              <GridItem minWidth="120px">
                CR{' '}
                {isBuying
                  ? formatThousands(commodity.sellPrice)
                  : formatThousands(commodity.buyPrice)}
              </GridItem>
              <GridItem minWidth="120px">
                {isBuying
                  ? formatThousands(commodity.supply)
                  : formatThousands(commodity.demand)}
              </GridItem>
              <GridItem minWidth="120px">{commodity.systemName}</GridItem>
              <GridItem
                minWidth="fit-content"
                display="flex"
                flexWrap="nowrap"
                gap={1}
              >
                {renderStationTypeIcon(commodity.station)}
                {commodity.station.name}
              </GridItem>
              <GridItem minWidth="120px">
                {formatThousands(commodity.station.arrivalDistance)} ls
              </GridItem>
              <GridItem minWidth="120px">
                {formatThousands(commodity.distance)} ly
              </GridItem>
              <GridItem minWidth="120px">
                {calculateTimeDifference(commodity.pricesUpdatedAt)}
              </GridItem>
            </SimpleGrid>
          ))}
    </VStack>
  );
};

export default CommodityFormResponse;
