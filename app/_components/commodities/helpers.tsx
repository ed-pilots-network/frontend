import { Image } from '@chakra-ui/react';

interface IStationType {
  fleetCarrier: boolean | null;
  planetary: boolean | null;
}

const renderLandingIcon = (station: IStationType) => {
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

export { renderLandingIcon, legendItems };
