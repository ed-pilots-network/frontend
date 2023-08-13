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
        Commodity Mobile: {commodityResponse[0]?.commodityDisplayName}
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
        columns={[5, 5, 7]}
        width="100%"
        fontWeight="bold"
        borderBottom="1px"
        borderColor={selectColor(isDark, 'border')}
        rowGap={1}
      >
        {/* TODO: fix runtime error validateDOMNesting btn as descendant of btn */}
        {gridHeadings.map((heading) =>
          renderGridHeading(
            heading.text,
            filter,
            setFilter,
            ascending,
            setAscending,
            heading.sort,
            isBuying,
            heading.hide,
          ),
        )}
      </SimpleGrid>
      {commodityResponse.length > 0 &&
        commodityResponse
          .sort((a: ICommodityFormResponse, b: ICommodityFormResponse) =>
            compareNumbers(a[filter] as number, b[filter] as number),
          )
          .map((commodity, index) => (
            <SimpleGrid
              key={index}
              columns={[5, 5, 7]}
              width="100%"
              rowGap={1}
              fontSize="sm"
            >
              <GridItem>
                CR{' '}
                {isBuying
                  ? formatThousands(commodity.sellPrice)
                  : formatThousands(commodity.buyPrice)}
              </GridItem>
              <GridItem textAlign="right" paddingRight={4}>
                {isBuying
                  ? formatThousands(commodity.supply)
                  : formatThousands(commodity.demand)}
              </GridItem>
              <GridItem width="max-content" minWidth="150px">
                {commodity.systemName}
              </GridItem>
              <GridItem
                display="flex"
                flexWrap="nowrap"
                width="max-content"
                minWidth="150px"
                gap={1}
                hideBelow="md"
              >
                {renderStationTypeIcon(commodity.station)}
                {commodity.station.name}
              </GridItem>
              <GridItem hideBelow="lg" textAlign="right" paddingRight={4}>
                {formatThousands(commodity.station.arrivalDistance)} ls
              </GridItem>
              <GridItem textAlign="right" paddingRight={4}>
                {formatThousands(commodity.distance)} ly
              </GridItem>
              <GridItem textAlign="right" paddingRight={4}>
                {calculateTimeDifference(commodity.pricesUpdatedAt)}
              </GridItem>
            </SimpleGrid>
          ))}
    </VStack>
  );
};

export default CommodityFormResponse;
