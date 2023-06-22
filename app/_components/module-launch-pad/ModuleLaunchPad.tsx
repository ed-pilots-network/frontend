import React from 'react';

import { Heading, LinkBox, LinkOverlay, SimpleGrid } from '@chakra-ui/react';
import NextLink from 'next/link';
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
} from '@/app/_icons/modules';
import useColorMode from '@/app/_hooks/useColorMode';

interface Module {
  title: string;
  url: string;
  icon: React.ReactNode;
  description: string;
}

const modules: Module[] = [
  {
    url: '/systems',
    icon: <Systems />,
    title: 'Systems',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/bodies',
    icon: <Bodies />,
    title: 'Bodies',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/stations',
    icon: <Stations />,
    title: 'Stations',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/attractions',
    icon: <Attractions />,
    title: 'Attractions',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/pois',
    icon: <POIs />,
    title: 'POIs',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/factions',
    icon: <Factions />,
    title: 'Factions',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/shipyard',
    icon: <Shipyard />,
    title: 'Shipyard',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/trade/single',
    icon: <SingleTradeRoute />,
    title: 'Single Trade Route',
    description:
      'Trade from A to B and find the best profit route using multiple filter options',
  },
  {
    url: '/trade/multi',
    icon: <MultiHopTradeRoute />,
    title: 'Multi-Hop Trade Route',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
  {
    url: '/trade/loop',
    icon: <LoopTradeRoute />,
    title: 'Loop Trade Route',
    description:
      'Browse the universe! Jump to any system or search by many properties',
  },
];

const ModuleLaunchPad = () => {
  const { isDark } = useColorMode();

  return (
    <SimpleGrid minChildWidth="220px" spacing="50px">
      {modules.map((module) => (
        <LinkBox
          key={module.title}
          borderWidth="1px"
          borderRadius="9px"
          borderColor={isDark ? 'dark.text' : 'light.text'}
          p="12px"
          position="relative"
        >
          <Heading
            as="h2"
            size="sm"
            display="flex"
            gap="8px"
            alignItems="center"
            mb="10px"
          >
            {module.icon}
            <LinkOverlay as={NextLink} href={module.url}>
              {module.title}
            </LinkOverlay>
          </Heading>
          <p>{module.description}</p>
        </LinkBox>
      ))}
    </SimpleGrid>
  );
};

export default ModuleLaunchPad;
