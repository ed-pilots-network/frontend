'use client';

import { useState } from 'react';
import { Box, HStack, Heading, Center, VStack } from '@chakra-ui/react';
import Form, { SubmitProps } from '@/components/systems/Form';
import useColorMode from '@/app/_hooks/useColorMode';
import selectColor from '@/app/_hooks/fontColorSelector';
import { SystemForm } from '../_components/systems/types';
import layoutConfig from '../_config/layout';

const PageClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isDark } = useColorMode();

  const handleSubmit = (data: SubmitProps) => {
    setIsLoading(true);

    let submitData: SystemForm = {
      ...data,
    };

    // TODO: submit data to backend
    setTimeout(() => {
      console.log('submitted ', submitData);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Box p={5} flex="1" as="main">
      <Center maxWidth={layoutConfig.maxWidth} marginX="auto">
        <VStack align="stretch" width="100%">
          <HStack spacing={4}>
            <Box alignSelf="baseline">
              <Heading
                as="h1"
                size={{ base: 'md', md: 'lg', lg: 'lg' }}
                marginX={{ base: 'auto', md: '0', lg: '0' }}
                color={selectColor(isDark, 'accent-text')}
              >
                Systems
              </Heading>
            </Box>
          </HStack>
          <Box
            borderWidth="2px"
            borderRadius="9px"
            borderColor={selectColor(isDark, 'border')}
            bg={selectColor(isDark, 'accent-bg')}
            padding="1rem"
          >
            <Form onSubmitHandler={handleSubmit} isLoading={isLoading} />
          </Box>
        </VStack>
      </Center>
    </Box>
  );
};

export default PageClient;
