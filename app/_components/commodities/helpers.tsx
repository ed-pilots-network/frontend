import { Image } from '@chakra-ui/react';

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
        marginY="auto"
      />
    );
  }
  if (station.planetary) {
    return (
      <Image
        src="/assets/Surface_settlement_sprite.png"
        alt="Planetary Station"
        boxSize="20px"
        marginY="auto"
      />
    );
  }
  if (!station.planetary && !station.fleetCarrier) {
    return (
      <Image
        src="/assets/Coriolis_sprite.png"
        alt="Orbital Station"
        boxSize="20px"
        marginY="auto"
      />
    );
  }
  return null;
};

const legendItems = [
  {
    text: 'Surface Landing',
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

const compareNumbers = (
  a: number,
  b: number,
  filter: string,
  ascending: boolean,
) => {
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

export {
  renderStationTypeIcon,
  legendItems,
  compareNumbers,
  calculateTimeDifference,
};
