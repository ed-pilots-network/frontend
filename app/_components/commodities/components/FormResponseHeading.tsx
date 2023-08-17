import React from 'react';

import { Flex, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { ICommodityFormResponse } from '@/app/_types/commodity';

interface IFormResponseHeadProps {
  commodityResponse: ICommodityFormResponse[];
  legendItems: {
    text: string;
    src: string;
    alt: string;
  }[];
}

const FormResponseHeading: React.FC<IFormResponseHeadProps> = ({
  commodityResponse,
  legendItems,
}) => (
  <>
    <Heading as="h2" size="md">
      Commodity: {commodityResponse[0]?.commodityDisplayName}
    </Heading>
    <HStack>
      <Heading as="h3" size="sm" hideBelow="md">
        Legend:
      </Heading>
      <Flex gap={4}>
        {legendItems.map((item, index) => (
          <VStack key={index} width="fit-content">
            <Text size="xs">{item.text}:</Text>
            <Image src={item.src} alt={item.alt} boxSize="20px" />
          </VStack>
        ))}
      </Flex>
    </HStack>
  </>
);

export default FormResponseHeading;
