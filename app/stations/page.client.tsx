'use client';

import { useState } from 'react';
import { Box, Flex, HStack, Heading } from '@chakra-ui/react';
import Form, { SubmitProps } from '@/components/stations/Form';
import useColorMode from '@/app/_hooks/useColorMode';
import selectColor from '@/app/_hooks/fontColorSelector';
import { StationForm } from '../_components/stations/types';

const PageClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isDark } = useColorMode();

  const handleSubmit = (data: SubmitProps) => {
    setIsLoading(true);

    let submitData: StationForm = {
      ...data,
    };

    // TODO: submit data to backend
    setTimeout(() => {
      console.log('submitted ', submitData);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Flex flexDirection="column" gap="24px" width="100%">
      <HStack spacing={4}>
        <Box alignSelf="baseline">
          <Heading
            as="h1"
            size={{ base: 'md', md: 'lg', lg: 'lg' }}
            marginX={{ base: 'auto', md: '0', lg: '0' }}
            color={selectColor(isDark, 'accent-text')}
          >
            Stations
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
    </Flex>
  );
};

export default PageClient;
