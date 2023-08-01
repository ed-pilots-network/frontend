import governments from '@/app/_lib/government-list';
import Select from './form/Select';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  placeholder?: string;
  register: UseFormRegisterReturn;
}

const GovernmentsField = ({ register, placeholder = 'Select...' }: Props) => {
  return (
    <Select placeholder={placeholder} register={register}>
      {governments.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );
};

export default GovernmentsField;
