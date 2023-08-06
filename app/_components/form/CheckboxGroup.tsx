import selectColor from '@/app/_hooks/fontColorSelector';
import useColorMode from '@/app/_hooks/useColorMode';
import { CheckboxGroup as ChakraCheckboxGroup, Stack } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const CheckboxGroup = ({ children }: PropsWithChildren<{}>) => {
  const { isDark } = useColorMode();
  return (
    <Stack
      borderWidth="1px"
      borderRadius="md"
      borderColor={selectColor(isDark, 'border')}
      padding={3}
      spacing={5}
      direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
    >
      <ChakraCheckboxGroup colorScheme="gray">{children}</ChakraCheckboxGroup>
    </Stack>
  );
};

export default CheckboxGroup;
