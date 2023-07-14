import { IconType } from 'react-icons';
import { GiSolarSystem, GiEarthAmerica } from 'react-icons/gi';
import { MdApartment, MdPhotoCamera } from 'react-icons/md';
import {
  FaArrowRight,
  FaArrowRightArrowLeft,
  FaShuttleSpace,
  FaArrowTrendUp,
  FaMapLocationDot,
  FaLandmark,
} from 'react-icons/fa6';

export interface Module {
  title: string;
  tag: string;
  url: string;
  icon: IconType;
  description: string;
}

export const Tags = ['discover', 'trade', 'outfit'];

const ModuleProps: Module[] = [
  {
    url: '/systems',
    tag: 'discover',
    icon: GiSolarSystem,
    title: 'Systems',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/bodies',
    tag: 'discover',
    icon: GiEarthAmerica,
    title: 'Bodies',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/stations',
    tag: 'discover',
    icon: MdApartment,
    title: 'Stations',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/attractions',
    tag: 'discover',
    icon: MdPhotoCamera,
    title: 'Attractions',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/pois',
    tag: 'discover',
    icon: FaMapLocationDot,
    title: 'POIs',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/factions',
    tag: 'discover',
    icon: FaLandmark,
    title: 'Factions',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/shipyard',
    tag: 'outfit',
    icon: FaShuttleSpace,
    title: 'Shipyard',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/trade/single',
    tag: 'trade',
    icon: FaArrowRight,
    title: 'Single Trade Route',
    description:
      'Trade from A to B and find the best profit route using multiple filter options',
  },
  {
    url: '/trade/multi',
    tag: 'trade',
    icon: FaArrowTrendUp,
    title: 'Multi-Hop Trade Route',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/trade/loop',
    tag: 'trade',
    icon: FaArrowRightArrowLeft,
    title: 'Loop Trade Route',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
];

export default ModuleProps;
