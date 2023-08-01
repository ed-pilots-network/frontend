import { UseFormRegisterReturn } from 'react-hook-form';
import Select from './form/Select';

interface Props {
  placeholder?: string;
  register: UseFormRegisterReturn;
}

const PowerEffectsField = ({ register, placeholder = 'Select...' }: Props) => {
  return (
    <Select placeholder={placeholder} register={register}>
      <option value="control">Control</option>
      <option value="expansion">Expansion</option>
      <option value="exploited">Exploited</option>
    </Select>
  );
};

export default PowerEffectsField;
