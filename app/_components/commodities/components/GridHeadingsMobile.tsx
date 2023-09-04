import React from 'react';

import { Button, Grid, GridItem, Icon } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faArrowDown,
  faArrowsUpDown,
} from '@fortawesome/free-solid-svg-icons';
import GetColor from '@/app/_hooks/colorSelector';

interface IGridHeadingsProps {
  filter: string;
  isBuying: boolean;
  setFilter: React.Dispatch<React.SetStateAction<any>>;
  ascending: boolean;
  setAscending: React.Dispatch<React.SetStateAction<boolean>>;
}

const GridHeadingsMobile: React.FC<IGridHeadingsProps> = ({
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
    margin: string;
  }[] = [
    { id: 0, text: 'Price', sortByString: 'sellPrice', margin: 'inherit' },
    { id: 1, text: 'Price', sortByString: 'buyPrice', margin: 'inherit' },
    { id: 2, text: 'Supply', sortByString: 'supply', margin: 'inherit' },
    { id: 3, text: 'Demand', sortByString: 'demand', margin: 'inherit' },
    { id: 4, text: 'System', sortByString: null, margin: 'inherit' },
    { id: 5, text: 'Distance', sortByString: 'distance', margin: 'auto' },
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
    <Grid
      templateColumns="repeat(4, 1fr)"
      width="100%"
      fontWeight="bold"
      borderBottom="1px"
      borderColor={GetColor('border')}
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
              marginX={heading.margin}
            >
              {heading.text}
            </GridItem>
          );
        }
        return (
          <GridItem display="flex" key={heading.id} marginX={heading.margin}>
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
    </Grid>
  );
};

export default GridHeadingsMobile;
