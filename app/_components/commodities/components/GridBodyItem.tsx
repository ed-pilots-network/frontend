import { formatThousands } from '@/app/_hooks/textFormatting';
import { GridItem, SimpleGrid } from '@chakra-ui/react';
import { calculateTimeDifference, renderStationTypeIcon } from '../helpers';
import { ICommodityFormResponse } from '@/app/_types/commodity';
import React from 'react';

interface IGridBodyItemProps {
  commodity: ICommodityFormResponse;
  isBuying: boolean;
}

const GridBodyItem: React.FC<IGridBodyItemProps> = ({
  commodity,
  isBuying,
}) => (
  <SimpleGrid columns={[5, 7]} width="100%" rowGap={1} fontSize="sm">
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
    <GridItem width="max-content" minWidth="180px">
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
);

export default GridBodyItem;
