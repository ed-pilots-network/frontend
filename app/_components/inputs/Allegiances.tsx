import allegiances from '@/app/_lib/allegiance-list';
import { UseFormRegisterReturn } from 'react-hook-form';
import Select from './form/Select';

interface Props {
  placeholder?: string;
  register: UseFormRegisterReturn;
}

const AllegiancesField = ({ register, placeholder }: Props) => (
  <Select placeholder={placeholder} register={register}>
    {allegiances.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </Select>
);

export default AllegiancesField;
