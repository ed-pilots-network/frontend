import { ICommodityFormResponse } from '@/app/_types/commodity';
import { Button, GridItem, Image } from '@chakra-ui/react';
import { SetStateAction } from 'react';
import { FaArrowDown, FaArrowsUpDown, FaArrowUp } from 'react-icons/fa6';

interface IStationType {
  fleetCarrier: boolean | null;
  planetary: boolean | null;
}

const renderStationTypeIcon = (station: IStationType) => {
  if (station.fleetCarrier) {
    return (
      <Image
        src="/assets/Carrier_sprite.png"
        alt="Fleet Carrier"
        boxSize="20px"
      />
    );
  }
  if (station.planetary) {
    return (
      <Image
        src="/assets/Surface_settlement_sprite.png"
        alt="Planetary Station"
        boxSize="20px"
      />
    );
  }
  if (!station.planetary && !station.fleetCarrier) {
    return (
      <Image
        src="/assets/Coriolis_sprite.png"
        alt="Orbital Station"
        boxSize="20px"
      />
    );
  }
  return null;
};

const legendItems = [
  {
    text: 'Planetary Landing',
    src: '/assets/Surface_settlement_sprite.png',
    alt: 'Surface Port',
    backgroundPosition: '0px 0px',
  },
  {
    text: 'Fleet Carrier',
    src: '/assets/Carrier_sprite.png',
    alt: 'Fleet Carrier',
  },
  {
    text: 'Orbital Station',
    src: '/assets/Coriolis_sprite.png',
    alt: 'Orbital Station',
  },
];

// calculate when the response was last updated
const calculateTimeDifference = (then: string): string => {
  const now = new Date().toISOString();
  const timeDifferenceMilliseconds = Math.abs(
    new Date(now).getTime() - new Date(then).getTime(),
  );
  const timeDifferenceHours = Math.ceil(
    timeDifferenceMilliseconds / (1000 * 3600),
  );

  if (timeDifferenceHours >= 24) {
    const timeDifferenceDays = Math.floor(timeDifferenceHours / 24);
    if (timeDifferenceDays > 1) {
      return `${timeDifferenceDays} days ago`;
    }
    return `${timeDifferenceHours} day ago`;
  }
  if (timeDifferenceHours === 1) {
    return `${timeDifferenceHours} hour ago`;
  }
  return `${timeDifferenceHours} hours ago`;
};

// headings that sort should diplay and arrow indicating the direction of the sort
const renderFilterButtonStatus = (
  filter: string,
  newFilter: string,
  ascending: boolean,
  setAscending: React.Dispatch<SetStateAction<boolean>>,
  setFilter: React.Dispatch<SetStateAction<any>>,
) => {
  if (filter === newFilter) {
    return (
      <Button
        variant="unstyled"
        onClick={() => {
          setFilter(newFilter);
          setAscending(!ascending);
        }}
      >
        {ascending ? <FaArrowDown /> : <FaArrowUp />}
      </Button>
    );
  }
  return <FaArrowsUpDown />;
};

// determine what the results headings should say and if they should allow sorting
const gridHeadings: {
  text: string;
  sort: string | null;
  hide: string;
}[] = [
  { text: 'Sell Price', sort: 'sellPrice', hide: '' },
  { text: 'Buy Price', sort: 'buyPrice', hide: '' },
  { text: 'Supply', sort: 'supply', hide: '' },
  { text: 'Demand', sort: 'demand', hide: '' },
  { text: 'System', sort: null, hide: '' },
  { text: 'Station', sort: null, hide: 'md' },
  { text: 'Station Distance', sort: null, hide: 'lg' },
  { text: 'Distance', sort: 'distance', hide: '' },
  { text: 'Latest Update', sort: null, hide: '' },
];

const unnecessaryHeadings = (isBuying: boolean, newFilter: string | null) => {
  if (isBuying && newFilter === 'buyPrice') return true;
  if (isBuying && newFilter === 'demand') return true;
  if (!isBuying && newFilter === 'sellPrice') return true;
  if (!isBuying && newFilter === 'supply') return true;
  return false;
};

// attach the sort buttons to the headings that sort, remove unnecessary headings
const renderGridHeading = (
  text: string,
  filter: string,
  setFilter: React.Dispatch<SetStateAction<any>>,
  ascending: boolean,
  setAscending: React.Dispatch<SetStateAction<boolean>>,
  newFilter: string | null,
  isBuying: boolean,
  hide: string,
) => {
  if (unnecessaryHeadings(isBuying, newFilter)) return null;
  if (!newFilter) {
    return (
      <GridItem display="flex" alignItems="center" hideBelow={hide}>
        {text}
      </GridItem>
    );
  }
  return (
    <GridItem display="flex" alignItems="center">
      <Button
        variant="unstyled"
        display="flex"
        gap={1}
        onClick={() => {
          setFilter(newFilter as keyof ICommodityFormResponse);
          setAscending(!ascending);
        }}
      >
        {text}
        {renderFilterButtonStatus(
          filter,
          newFilter as keyof ICommodityFormResponse,
          ascending,
          setAscending,
          setFilter,
        )}
      </Button>
    </GridItem>
  );
};

export {
  renderStationTypeIcon,
  legendItems,
  calculateTimeDifference,
  renderFilterButtonStatus,
  gridHeadings,
  renderGridHeading,
};
