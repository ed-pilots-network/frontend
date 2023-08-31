import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faArrowDown,
  faArrowsUpDown,
} from '@fortawesome/free-solid-svg-icons';
import { Button, GridItem, Icon, SimpleGrid } from '@chakra-ui/react';
import GetColor from '@/app/_hooks/colorSelector';

interface IGridHeadingsProps {
  filter: string;
  isBuying: boolean;
  setFilter: React.Dispatch<React.SetStateAction<any>>;
  ascending: boolean;
  setAscending: React.Dispatch<React.SetStateAction<boolean>>;
}

const GridHeadings: React.FC<IGridHeadingsProps> = ({
  filter,
  isBuying,
  setFilter,
  ascending,
  setAscending,
}) => {
  const gridHeadings: {
    id: number;
    text: string;
    sortByString: string | null;
    hideBelow: string;
  }[] = [
    { id: 0, text: 'Sell Price', sortByString: 'sellPrice', hideBelow: '' },
    { id: 1, text: 'Buy Price', sortByString: 'buyPrice', hideBelow: '' },
    { id: 2, text: 'Supply', sortByString: 'supply', hideBelow: '' },
    { id: 3, text: 'Demand', sortByString: 'demand', hideBelow: '' },
    { id: 4, text: 'System', sortByString: null, hideBelow: '' },
    { id: 5, text: 'Station', sortByString: null, hideBelow: 'md' },
    { id: 6, text: 'Station Distance', sortByString: null, hideBelow: 'lg' },
    { id: 7, text: 'Distance', sortByString: 'distance', hideBelow: '' },
    { id: 8, text: 'Latest Update', sortByString: null, hideBelow: '' },
  ];

  const unnecessaryHeadings = (newFilter: string | null) => {
    if (isBuying && newFilter === 'buyPrice') return true;
    if (isBuying && newFilter === 'demand') return true;
    if (!isBuying && newFilter === 'sellPrice') return true;
    if (!isBuying && newFilter === 'supply') return true;
    return false;
  };

  const renderArrowIcon = (newFilter: string) => {
    if (filter === newFilter) {
      return ascending ? (
        <Icon as={FontAwesomeIcon} icon={faArrowDown} boxSize={3} />
      ) : (
        <Icon as={FontAwesomeIcon} icon={faArrowUp} boxSize={3} />
      );
    }
    return <Icon as={FontAwesomeIcon} icon={faArrowsUpDown} boxSize={3} />;
  };

  return (
    <SimpleGrid
      columns={[5, 7]}
      width="100%"
      minChildWidth="130px"
      fontWeight="bold"
      borderBottom="1px"
      borderColor={GetColor('border')}
      rowGap={1}
      paddingX={2}
    >
      {gridHeadings.map((heading) => {
        if (unnecessaryHeadings(heading.sortByString)) return null;
        if (!heading.sortByString) {
          return (
            <GridItem
              display="flex"
              alignItems="center"
              key={heading.id}
              fontSize="sm"
              hideBelow={heading.hideBelow}
            >
              {heading.text}
            </GridItem>
          );
        }
        return (
          <GridItem
            display="flex"
            alignItems="center"
            key={heading.id}
            hideBelow={heading.hideBelow}
          >
            <Button
              variant="unstyled"
              display="flex"
              fontSize="sm"
              gap={1}
              onClick={() => {
                setFilter(heading.sortByString);
                setAscending(!ascending);
              }}
            >
              {heading.text}
              {renderArrowIcon(heading.sortByString)}
            </Button>
          </GridItem>
        );
      })}
    </SimpleGrid>
  );
};

export default GridHeadings;
