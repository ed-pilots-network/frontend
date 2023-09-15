import { Box, Flex, Heading } from '@chakra-ui/react';
import GetColor from '@/app/_hooks/colorSelector';

const PageHeading = ({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) => (
  <Flex direction="column" gap={2}>
    <Box alignSelf="baseline">
      <Heading
        as="h1"
        size={{ base: 'md', md: 'lg', lg: 'lg' }}
        marginX={{ base: 'auto', md: '0', lg: '0' }}
        color={GetColor('accent-text')}
      >
        {heading}
      </Heading>
    </Box>
    <Box alignSelf="baseline">
      <Heading
        as="h2"
        size={{ base: 'xs', md: 'sm', lg: 'sm' }}
        marginX={{ base: 'auto', md: '0', lg: '0' }}
        textAlign={{ base: 'center', sm: 'left', md: 'left' }}
      >
        {subheading}
      </Heading>
    </Box>
  </Flex>
);

export default PageHeading;
