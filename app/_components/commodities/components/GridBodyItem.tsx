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
    minChildWidth="130px"
    fontSize="sm"
    _odd={{
      background: `${GetColor('grid-accent')}`,
      borderRadius: 'md',
    }}
    padding={2}
  >
    <GridItem>
      CR{' '}
      {isBuying
        ? formatThousands(commodity.sellPrice)
        : formatThousands(commodity.buyPrice)}
    </GridItem>
    <GridItem>
      {isBuying
        ? formatThousands(commodity.supply)
        : formatThousands(commodity.demand)}
    </GridItem>
    <GridItem width="max-content">{commodity.systemName}</GridItem>
    <GridItem display="flex" flexWrap="nowrap" columnGap={1} hideBelow="md">
      {renderStationTypeIcon(commodity.station, isDark)}
      {commodity.station.name}
    </GridItem>
    <GridItem hideBelow="lg" paddingLeft={5}>
      {formatThousands(commodity.station.arrivalDistance)} ls
    </GridItem>
    <GridItem paddingLeft={5}>
      {formatThousands(commodity.distance)} ly
    </GridItem>
    <GridItem>{calculateTimeDifference(commodity.pricesUpdatedAt)}</GridItem>
  </SimpleGrid>
);

export default GridBodyItem;
