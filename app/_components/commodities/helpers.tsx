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

const gridHeadings: { text: string; filter: string | null }[] = [
  { text: 'Sell Price', filter: 'sellPrice' },
  { text: 'Supply', filter: 'supply' },
  { text: 'System', filter: null },
  { text: 'Station', filter: null },
  { text: 'Station Distance', filter: null },
  { text: 'Distance', filter: 'distance' },
  { text: 'Latest Update', filter: 'updateTime' },
];

const renderGridHeading = (
  text: string,
  filter: string,
  setFilter: React.Dispatch<SetStateAction<any>>,
  ascending: boolean,
  setAscending: React.Dispatch<SetStateAction<boolean>>,
  newFilter: string | null,
) => {
  if (newFilter) {
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
  }
  return (
    <GridItem display="flex" alignItems="center">
      {text}
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
