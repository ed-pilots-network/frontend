import selectColor from '@/app/_hooks/fontColorSelector';
import useColorMode from '@/app/_hooks/useColorMode';
import { Select as ChakraSelect } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  children: ReactNode;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  disabled?: boolean;
}

const Select = ({ children, register, placeholder = 'Select...' }: Props) => {
  const { isDark } = useColorMode();
  return (
    <ChakraSelect
      {...register}
      borderColor={selectColor(isDark, 'border')}
      placeholder={placeholder}
    >
      {children}
    </ChakraSelect>
  );
};

export default Select;
