import { Select as ChakraSelect } from '@chakra-ui/react';
import allegiances from '@/app/_lib/allegiance-list';
import { ChangeEvent, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  children: ReactNode;
  register?: UseFormRegisterReturn;
  placeholder?: string;
}

const Select = ({ children, register, placeholder = 'Select...' }: Props) => {
  return (
    <ChakraSelect {...register}>
      <option>{placeholder}</option>
      {children}
    </ChakraSelect>
  );
};

export default Select;
