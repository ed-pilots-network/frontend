import allegiances from '@/app/_lib/allegiance-list';
import Select from './form/Select';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  placeholder?: string;
  register: UseFormRegisterReturn;
}

const AllegiancesField = ({ register, placeholder = 'Select...' }: Props) => {
  return (
    <Select placeholder={placeholder} register={register}>
      {allegiances.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );
};

export default AllegiancesField;
