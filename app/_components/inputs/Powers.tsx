import powers from '@/app/_lib/power-list';
import Select from './form/Select';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  placeholder?: string;
  register: UseFormRegisterReturn;
}

const PowersField = ({ register, placeholder = 'Select...' }: Props) => {
  return (
    <Select placeholder={placeholder} register={register}>
      {powers.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );
};

export default PowersField;
