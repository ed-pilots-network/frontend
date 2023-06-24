import {
  Attractions,
  Bodies,
  Factions,
  LoopTradeRoute,
  MultiHopTradeRoute,
  POIs,
  Shipyard,
  SingleTradeRoute,
  Stations,
  Systems,
} from '../../_icons/moduleIcons';

export interface Module {
  title: string;
  tag: string;
  url: string;
  icon: React.ReactNode;
  description: string;
}

const ModuleProps: Module[] = [
  {
    url: '/systems',
    tag: 'discover',
    icon: <Systems />,
    title: 'Systems',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/bodies',
    tag: 'discover',
    icon: <Bodies />,
    title: 'Bodies',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/stations',
    tag: 'discover',
    icon: <Stations />,
    title: 'Stations',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/attractions',
    tag: 'discover',
    icon: <Attractions />,
    title: 'Attractions',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/pois',
    tag: 'discover',
    icon: <POIs />,
    title: 'POIs',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/factions',
    tag: 'discover',
    icon: <Factions />,
    title: 'Factions',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/shipyard',
    tag: 'outfit',
    icon: <Shipyard />,
    title: 'Shipyard',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/trade/single',
    tag: 'trade',
    icon: <SingleTradeRoute />,
    title: 'Single Trade Route',
    description:
      'Trade from A to B and find the best profit route using multiple filter options',
  },
  {
    url: '/trade/multi',
    tag: 'trade',
    icon: <MultiHopTradeRoute />,
    title: 'Multi-Hop Trade Route',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/trade/loop',
    tag: 'trade',
    icon: <LoopTradeRoute />,
    title: 'Loop Trade Route',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
];

export default ModuleProps;
