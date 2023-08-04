import selectColor from '@/app/_hooks/fontColorSelector';
import useColorMode from '@/app/_hooks/useColorMode';
import { RadioGroup as ChackraRadioGroup, Stack } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const RadioGroup = ({ children }: PropsWithChildren<{}>) => {
  const { isDark } = useColorMode();
  return (
    <ChackraRadioGroup colorScheme="gray">
      <Stack
        borderWidth="1px"
        borderRadius="md"
        borderColor={selectColor(isDark, 'border')}
        padding={3}
        spacing={5}
        direction="row"
      >
        {children}
      </Stack>
    </ChackraRadioGroup>
  );
};

export default RadioGroup;
