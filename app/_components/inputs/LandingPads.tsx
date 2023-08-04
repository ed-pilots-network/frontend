import { UseFormRegisterReturn } from 'react-hook-form';
import Radio from '@/app/_components/form/Radio';
import RadioGroup from '@/app/_components/form/RadioGroup';

interface Props {
  register: UseFormRegisterReturn;
}

export const radioValues = [
  { name: 'Small', value: 'landingPadSmall' },
  { name: 'Medium', value: 'landingPadMedium' },
  { name: 'Large', value: 'landingPadLarge', checked: true },
];

const LandingPad = ({ register }: Props) => (
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

export default LandingPad;
