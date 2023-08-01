import economies from '@/app/_lib/economy-list';
import Select from './form/Select';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  placeholder?: string;
  register: UseFormRegisterReturn;
}

const EconomiesField = ({ register, placeholder = 'Select...' }: Props) => {
  return (
    <Select placeholder={placeholder} register={register}>
      {economies.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );
};

export default EconomiesField;
