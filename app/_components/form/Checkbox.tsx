import selectColor from '@/app/_hooks/fontColorSelector';
import useColorMode from '@/app/_hooks/useColorMode';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';

interface Props {
  register: UseFormRegisterReturn;
  label: string;
  checked?: boolean;
}

const Checkbox = ({ register, label, checked }: Props) => {
  const { isDark } = useColorMode();
  return (
    <ChakraCheckbox
      colorScheme="orange"
      {...register}
      borderColor={selectColor(isDark, 'border')}
      defaultChecked={checked}
    >
      {label}
    </ChakraCheckbox>
  );
};

export default Checkbox;
