import { UseFormRegisterReturn } from 'react-hook-form';
import Select from './form/Select';
import ringTypes from '@/app/_lib/ringType-list';

interface Props {
  register: UseFormRegisterReturn;
  placeholder?: string;
}

const RingTypesField = ({ register, placeholder }: Props) => (
  <Select placeholder={placeholder} register={register}>
    {ringTypes.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </Select>
);

export default RingTypesField;
