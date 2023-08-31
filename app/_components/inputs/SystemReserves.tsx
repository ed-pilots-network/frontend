import { UseFormRegisterReturn } from 'react-hook-form';
import Select from './form/Select';
import systemReserves from '@/app/_lib/systemReserve-list';

interface Props {
  register: UseFormRegisterReturn;
  placeholder?: string;
}

const SystemReservesField = ({ register, placeholder }: Props) => (
  <Select placeholder={placeholder} register={register}>
    {systemReserves.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </Select>
);

export default SystemReservesField;
