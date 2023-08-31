import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { formatThousands } from '@/app/_hooks/textFormatting';
import { Center, Flex, Icon, Tbody, Td, Text, Tr } from '@chakra-ui/react';
import { ICommodityFormResponse } from '@/app/_types/commodity';
import { calculateTimeDifference, renderStationTypeIcon } from '../helpers';
import GetColor from '@/app/_hooks/colorSelector';

interface IGridBodyItemProps {
  isDark: boolean;
  commodity: ICommodityFormResponse;
  isBuying: boolean;
}

const GridBodyItemMobile: React.FC<IGridBodyItemProps> = ({
  isDark,
  commodity,
  isBuying,
}) => {
  const [showItemCard, setShowItemCard] = useState(false);

  const toggleItemCard = () => (
    <Tr fontSize="sm" borderBottomRadius="10px">
      <Td colSpan={4} lineHeight={2}>
        <Text>Station Name: {commodity.station.name}</Text>
        <Flex gap={2}>
          Station Type:
          {renderStationTypeIcon(commodity.station, isDark)}
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
        background: `${GetColor('grid-accent')}`,
      }}
    >
      <Tr>
        <Td display="flex" gap={2}>
          <Center>
            {showItemCard ? (
              <Icon as={FontAwesomeIcon} icon={faArrowDown} />
            ) : (
              <Icon as={FontAwesomeIcon} icon={faArrowUp} />
            )}
          </Center>
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
