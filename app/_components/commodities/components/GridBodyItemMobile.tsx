import React, { useState } from 'react';

import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';
import { formatThousands } from '@/app/_hooks/textFormatting';
import { Center, Flex, Tbody, Td, Text, Tr } from '@chakra-ui/react';
import { ICommodityFormResponse } from '@/app/_types/commodity';
import selectColor from '@/app/_hooks/fontColorSelector';
import useColorMode from '@/app/_hooks/useColorMode';
import { calculateTimeDifference, renderStationTypeIcon } from '../helpers';

interface IGridBodyItemProps {
  commodity: ICommodityFormResponse;
  isBuying: boolean;
}

const GridBodyItemMobile: React.FC<IGridBodyItemProps> = ({
  commodity,
  isBuying,
}) => {
  const [showItemCard, setShowItemCard] = useState(false);
  const { isDark } = useColorMode();

  const toggleItemCard = () => (
    <Tr fontSize="sm" borderBottomRadius="10px">
      <Td colSpan={4} lineHeight={2}>
        <Text>Station Name: {commodity.station.name}</Text>
        <Flex gap={2}>
          Station Type:
          {renderStationTypeIcon(commodity.station)}
        </Flex>
        <Text>
          Arrival Distance: {commodity.station.arrivalDistance ?? '?'} ls
        </Text>
        <Text>
          Last Updated: {calculateTimeDifference(commodity.pricesUpdatedAt)}
        </Text>
      </Td>
    </Tr>
  );

  return (
    <Tbody
      cursor="pointer"
      onClick={() => setShowItemCard(!showItemCard)}
      _odd={{
        background: `${selectColor(isDark, '')}`,
      }}
    >
      <Tr>
        <Td display="flex" gap={2}>
          <Center>{showItemCard ? <FaArrowUp /> : <FaArrowDown />}</Center>
          {isBuying
            ? formatThousands(commodity.sellPrice)
            : formatThousands(commodity.buyPrice)}
        </Td>
        <Td>
          {isBuying
            ? formatThousands(commodity.supply)
            : formatThousands(commodity.demand)}
        </Td>
        <Td>{commodity.systemName}</Td>
        <Td>{formatThousands(commodity.distance)} ly</Td>
      </Tr>
      {showItemCard && toggleItemCard()}
    </Tbody>
  );
};

export default GridBodyItemMobile;
