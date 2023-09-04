import GetColor from '@/app/_hooks/colorSelector';
import { RadioGroup as ChackraRadioGroup, Stack } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const RadioGroup = ({ children }: PropsWithChildren<{}>) => (
  <ChackraRadioGroup colorScheme="gray">
    <Stack
      borderWidth="1px"
      borderRadius="md"
      borderColor={GetColor('border')}
      padding={3}
      spacing={5}
      direction="row"
    >
      {children}
    </Stack>
  </ChackraRadioGroup>
);

export default RadioGroup;
