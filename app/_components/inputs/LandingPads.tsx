import { UseFormRegisterReturn } from 'react-hook-form';
import Radio from '@/app/_components/form/Radio';
import RadioGroup from '@/app/_components/form/RadioGroup';

interface Props {
  register: UseFormRegisterReturn;
}

export const radioValues = [
  { name: 'Small', value: 'SMALL' },
  { name: 'Medium', value: 'MEDIUM' },
  { name: 'Large', value: 'LARGE', checked: true },
];

const LandingPadsField = ({ register }: Props) => (
  <RadioGroup>
    {radioValues.map((checkbox, index) => (
      <Radio
        key={index}
        label={checkbox.name}
        value={checkbox.value}
        checked={checkbox.checked}
        register={register}
      />
    ))}
  </RadioGroup>
);

export default LandingPadsField;
