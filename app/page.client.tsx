'use client';

import { Center, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import PageLink from './_components/pagelink/PageLink';
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
} from './_icons/modules';

const PageClient = () => (
  <Center width="100%">
    <Flex flexDirection="column" gap="24px" width="100%" maxWidth="1500px">
      <Heading as="h1" size="lg">
        Elite Dangerous Pilots Network
      </Heading>
      <SimpleGrid minChildWidth="220px" spacing="50px">
        <PageLink
          url="/systems"
          icon={<Systems />}
          title="Systems"
          description="Browse the universe! Jump to any system or search by many properties"
          notImplemented
        />
        <PageLink
          url="/bodies"
          icon={<Bodies />}
          title="Bodies"
          description="Browse the universe! Jump to any system or search by many properties"
          notImplemented
        />
        <PageLink
          url="/stations"
          icon={<Stations />}
          title="Stations"
          description="Browse the universe! Jump to any system or search by many properties"
          notImplemented
        />
        <PageLink
          url="/attractions"
          icon={<Attractions />}
          title="Attractions"
          description="Browse the universe! Jump to any system or search by many properties"
          notImplemented
        />
        <PageLink
          url="/pois"
          icon={<POIs />}
          title="POIs"
          description="Browse the universe! Jump to any system or search by many properties"
          notImplemented
        />
        <PageLink
          url="/factions"
          icon={<Factions />}
          title="Factions"
          description="Browse the universe! Jump to any system or search by many properties"
          notImplemented
        />
        <PageLink
          url="/shipyard"
          icon={<Shipyard />}
          title="Shipyard"
          description="Browse the universe! Jump to any system or search by many properties"
          notImplemented
        />
        <PageLink
          url="/trade/single"
          icon={<SingleTradeRoute />}
          title="Single Trade Route"
          description="Trade from A to B and find the best profit route using multiple filter options"
          notImplemented
        />
        <PageLink
          url="/trade/multi"
          icon={<MultiHopTradeRoute />}
          title="Multi-Hop Trade Route"
          description="Browse the universe! Jump to any system or search by many properties"
          notImplemented
        />
        <PageLink
          url="/trade/loop"
          icon={<LoopTradeRoute />}
          title="Loop Trade Route"
          description="Browse the universe! Jump to any system or search by many properties"
          notImplemented
        />
      </SimpleGrid>
    </Flex>
  </Center>
);

export default PageClient;
