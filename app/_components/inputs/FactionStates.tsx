import factionStates from '@/app/_lib/faction-state-list';
import Select from './form/Select';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  placeholder?: string;
  register: UseFormRegisterReturn;
}

const FactionStatesField = ({ register, placeholder = 'Select...' }: Props) => {
  return (
    <Select placeholder={placeholder} register={register}>
      {factionStates.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );
};

export default FactionStatesField;