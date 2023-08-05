import powers from '@/app/_lib/power-list';
import { UseFormRegisterReturn } from 'react-hook-form';
import Select from './form/Select';

interface Props {
  register: UseFormRegisterReturn;
  placeholder?: string;
}

const PowersField = ({ register, placeholder }: Props) => (
  <Select placeholder={placeholder} register={register}>
    {powers.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </Select>
);

export default PowersField;
