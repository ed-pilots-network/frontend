import { UseFormRegisterReturn } from 'react-hook-form';
import Select from './form/Select';

interface Props {
  placeholder?: string;
  register: UseFormRegisterReturn;
}

const RequiresPermitField = ({
  register,
  placeholder = 'Select...',
}: Props) => (
  <Select placeholder={placeholder} register={register}>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </Select>
);

export default RequiresPermitField;
