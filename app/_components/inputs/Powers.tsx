import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Select, OptionBase, GroupBase } from 'chakra-react-select';
import { Control, Controller } from 'react-hook-form';
import selectStyles from '@/app/_hooks/selectStyles';
import useColorMode from '@/app/_hooks/useColorMode';
import powers from '@/app/_lib/power-list';

interface Props {
  control: Control<any>;
  label?: string;
}

interface SelectGroup extends OptionBase {
  label: string;
  value: string;
}

const PowersField: React.FC<Props> = ({ control, label = 'Powers' }) => {
  const { isDark } = useColorMode();

  return (
    <Controller
      name="powers"
      control={control}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
      }) => (
        <FormControl isInvalid={!!error} id="powers">
          <FormLabel>{label}</FormLabel>
          <Select<SelectGroup, true, GroupBase<SelectGroup>>
            id="powers-field"
            instanceId="powers-field"
            name={name}
            ref={ref}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            options={powers.map((item) => ({
              value: item,
              label: item,
            }))}
            chakraStyles={selectStyles(isDark)}
          />
          <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
};

export default PowersField;
