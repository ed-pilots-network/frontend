import economies from '@/app/_lib/economy-list';
import { UseFormRegisterReturn } from 'react-hook-form';
import Select from './form/Select';

interface Props {
  register: UseFormRegisterReturn;
  placeholder?: string;
}

const EconomiesField = ({ register, placeholder }: Props) => (
  <Select placeholder={placeholder} register={register}>
    {economies.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </Select>
);

export default EconomiesField;
