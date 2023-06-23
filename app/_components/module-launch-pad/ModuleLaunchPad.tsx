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

  // local functions
  const selectColor = (element: String) => {
    if (element === 'text') return isDark ? 'dark.text' : 'light.text';
    if (element === 'box') return isDark ? 'dark.box' : 'light.box';
    return isDark ? 'dark.background' : 'light.background';
  };

  // NOTE: these hex values are a hack to get the dark.box to work
  // Chackra UI is not applying the theme variables with alpha: aslink87
  const cardBgColor = isDark ? 'rgb(30 31 34 / 0.7)' : 'rgb(255 255 255 / 0.7)';

  const filteredGrid = (filter: String) => (
    <SimpleGrid columns={[1, 1, 3]} spacing="50px">
      {ModuleProps.filter((module: Module) => module.tag === filter).map(
        (module) => (
          <LinkBox
            key={module.title}
            borderWidth="1px"
            borderRadius="9px"
            borderColor={selectColor('text')}
            bgColor={cardBgColor}
            p="25px"
            position="relative"
            _hover={{
              boxShadow: 'lg',
              backdropFilter: 'auto',
              backdropContrast: '90%',
            }}
          >
            <Heading
              as="h2"
              size="sm"
              gap="8px"
              alignItems="center"
              mb="10px"
              letterSpacing="2px"
            >
              {module.icon}
              <LinkOverlay as={NextLink} href={module.url} ml="10px">
                {module.title}
              </LinkOverlay>
            </Heading>
            <p>{module.description}</p>
          </LinkBox>
        ),
      )}
    </SimpleGrid>
  );

  const renderTab = (text: string) => (
    <Tab
      _selected={{
        color: selectColor('text'),
        borderBottom: '1px solid currentcolor',
        fontWeight: 'bold',
        letterSpacing: '1px',
      }}
      aria-label={`Toggle ${text} Tab`}
    >
      {text}
    </Tab>
  );

  const renderTabPanel = (img: string, alt: string, filter: string) => (
    <TabPanel>
      <Box as="div">
        <Hide below="md">
          <Center position="absolute" width="100%" left="0">
            <Img
              src={img}
              alt={alt}
              maxWidth="500px"
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

  // render export
  return (
    <Tabs
      position="relative"
      variant="enclosed"
      align="center"
      minHeight="100%"
      colorScheme={selectColor('text')}
    >
      <TabList display="flex" gap="2rem" flexWrap="wrap">
        {renderTab('Discover')}
        {renderTab('Trade')}
        {renderTab('Outfit')}
      </TabList>
      <TabPanels mt="20px" minHeight="400px">
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
