import React from 'react';
import {
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  useColorMode,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Box,
  Img,
  Center,
  Hide,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import ModuleProps, { Module } from './moduleProps';

const ModuleLaunchPad = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const selectColor = (element: String) => {
    if (element === 'text') return isDark ? 'dark.text' : 'light.text';
    if (element === 'box') return isDark ? 'dark.box' : 'light.box';
    return isDark ? 'dark.background' : 'light.background';
  };

  const filteredGrid = (filter: String) => (
    <SimpleGrid columns={[1, 2, 3]} spacing="50px">
      {ModuleProps.filter((module: Module) => module.tag === filter).map(
        (module) => (
          <LinkBox
            key={module.title}
            borderWidth="1px"
            borderRadius="9px"
            borderColor={selectColor('text')}
            bgColor="rgb(30 31 34 / 0.7)" // NOTE: this is a hack to get the dark.box to work, Chackra UI is not applying the dark.box variable: aslink87
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
              letterSpacing="2px"
            >
              {module.icon}
              <LinkOverlay as={NextLink} href={module.url}>
                {module.title}
              </LinkOverlay>
            </Heading>
            <p>{module.description}</p>
          </LinkBox>
        ),
      )}
    </SimpleGrid>
  );

  const renderTabPanel = (img: string, alt: string, filter: string) => (
    <TabPanel>
      <Box as="div">
        <Hide below="md">
          <Center position="absolute" width="100%" left="0">
            <Img
              src={img}
              alt={alt}
              maxWidth="600px"
              objectFit="cover"
              opacity={0.2}
              loading="lazy"
            />
          </Center>
        </Hide>
        {filteredGrid(filter)}
      </Box>
    </TabPanel>
  );

  return (
    <Tabs
      position="relative"
      variant="enclosed"
      align="center"
      colorScheme={selectColor('text')}
    >
      <TabList>
        <Tab
          _selected={{
            color: selectColor('text'),
            borderBottom: `1px solid currentcolor`,
            fontWeight: 'bold',
            letterSpacing: '1px',
          }}
          aria-label="Toggle Discover Tab"
        >
          Discover
        </Tab>
        <Tab
          _selected={{
            color: selectColor('text'),
            borderBottom: `1px solid currentcolor`,
            fontWeight: 'bold',
            letterSpacing: '1px',
          }}
          aria-label="Toggle Trade Tab"
        >
          Trade
        </Tab>
        <Tab
          _selected={{
            color: selectColor('text'),
            borderBottom: `1px solid currentcolor`,
            fontWeight: 'bold',
            letterSpacing: '1px',
          }}
          aria-label="Toggle Outfit Tab"
        >
          Outfit
        </Tab>
      </TabList>
      <TabPanels>
        {renderTabPanel('/assets/Asp_Explorer.svg', 'Asp Explorer', 'discover')}
        {renderTabPanel('/assets/Type_9.svg', 'Type 9 Heavy', 'trade')}
        {renderTabPanel(
          '/assets/Alliance_Crusader.svg',
          'Alliance Crusader',
          'outfit',
        )}
      </TabPanels>
    </Tabs>
  );
};

export default ModuleLaunchPad;
