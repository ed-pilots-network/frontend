import { Select as ChakraSelect } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  children: ReactNode;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  disabled?: boolean;
}

const Select = ({ children, register, placeholder = 'Select...' }: Props) => (
  <ChakraSelect {...register} placeholder={placeholder} variant="outline">
    {children}
  </ChakraSelect>
);

export default Select;
