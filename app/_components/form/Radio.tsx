import selectColor from '@/app/_hooks/fontColorSelector';
import useColorMode from '@/app/_hooks/useColorMode';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Radio as ChakraRadio } from '@chakra-ui/react';

interface Props {
  register: UseFormRegisterReturn;
  label: string;
  value: string;
  checked?: boolean;
}

const Radio = ({ register, label, value, checked }: Props) => {
  const { isDark } = useColorMode();
  return (
    <ChakraRadio
      colorScheme="orange"
      {...register}
      borderColor={selectColor(isDark, 'border')}
      borderRadius={8}
      defaultChecked={checked}
      value={value}
    >
      {label}
    </ChakraRadio>
  );
};

export default Radio;
