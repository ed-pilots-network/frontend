import factionStates from '@/app/_lib/faction-state-list';
import { UseFormRegisterReturn } from 'react-hook-form';
import Select from './form/Select';

interface Props {
  register: UseFormRegisterReturn;
  placeholder?: string;
}

const FactionStatesField = ({ register, placeholder }: Props) => (
  <Select placeholder={placeholder} register={register}>
    {factionStates.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </Select>
);

export default FactionStatesField;
