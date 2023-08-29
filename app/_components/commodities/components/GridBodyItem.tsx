import React from 'react';

import { formatThousands } from '@/app/_hooks/textFormatting';
import { GridItem, SimpleGrid } from '@chakra-ui/react';
import { ICommodityFormResponse } from '@/app/_types/commodity';
import GetColor from '@/app/_hooks/colorSelector';
import { calculateTimeDifference, renderStationTypeIcon } from '../helpers';

interface IGridBodyItemProps {
  isDark: boolean;
  commodity: ICommodityFormResponse;
  isBuying: boolean;
}

const GridBodyItem: React.FC<IGridBodyItemProps> = ({
  isDark,
  commodity,
  isBuying,
}) => (
  <SimpleGrid
    columns={[5, 7]}
    width="100%"
    gap={8}
    fontSize="sm"
    _odd={{
      background: `${GetColor('grid-accent')}`,
    }}
    paddingY={2}
  >
    <GridItem>
      CR{' '}
      {isBuying
        ? formatThousands(commodity.sellPrice)
        : formatThousands(commodity.buyPrice)}
    </GridItem>
    <GridItem textAlign="right" paddingRight={8}>
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
      {renderStationTypeIcon(commodity.station, isDark)}
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
