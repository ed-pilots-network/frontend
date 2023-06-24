import React from 'react';
import {
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Box,
  Icon,
  Img,
  Center,
  Hide,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import useColorMode from '@/app/_hooks/useColorMode';
import selectColor from '@/app/_hooks/fontColorSelector';
import ModuleProps, { Module } from './moduleProps';

const ModuleLaunchPad = () => {
  const { isDark } = useColorMode();

  // local functions
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
            borderColor={selectColor(isDark, 'text')}
            bgColor={cardBgColor}
            p="25px"
            position="relative"
            _hover={{
              boxShadow: 'lg',
              backdropFilter: 'auto',
              backdropContrast: '90%',
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb="10px"
              letterSpacing="2px"
            >
              <Icon as={module.icon} boxSize={6} />
              <LinkOverlay as={NextLink} href={module.url} ml="10px">
                <Heading as="h2" size="sm">
                  {module.title}
                </Heading>
              </LinkOverlay>
            </Box>
            <p>{module.description}</p>
          </LinkBox>
        ),
      )}
    </SimpleGrid>
  );

  const renderTab = (text: string) => (
    <Tab
      _selected={{
        color: selectColor(isDark, 'text'),
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
      colorScheme={selectColor(isDark, 'text')}
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
