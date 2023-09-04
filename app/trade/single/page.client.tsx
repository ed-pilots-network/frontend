'use client';

import { useState } from 'react';
import { Box, HStack, Heading, Flex } from '@chakra-ui/react';
import Form, { SubmitProps } from '@/components/trade-routes/single/Form';
import GetColor from '@/app/_hooks/colorSelector';
import { SingleTradeRouteForm } from '@/app/_types/forms';

const PageClient = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (data: SubmitProps) => {
    setIsLoading(true);

    let submitData: SingleTradeRouteForm = {
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
            color={GetColor('accent-text')}
          >
            Single Trade Route Finder
          </Heading>
        </Box>
      </HStack>
      <Box
        borderWidth="2px"
        borderRadius="9px"
        borderColor={GetColor('border')}
        padding="1rem"
      >
        <Form onSubmitHandler={handleSubmit} isLoading={isLoading} />
      </Box>
    </Flex>
  );
};

export default PageClient;
