import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Select, OptionBase, GroupBase } from 'chakra-react-select';
import { Control, Controller } from 'react-hook-form';
import selectStyles from '@/app/_hooks/selectStyles';
import economies from '@/app/_lib/economy-list';

interface Props {
  control: Control<any>;
  label?: string;
}

interface SelectGroup extends OptionBase {
  label: string;
  value: string;
}

const EconomiesField: React.FC<Props> = ({
  control,
  label = 'Economy Type',
}) => {
  return (
    <Controller
      name="economy"
      control={control}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
      }) => (
        <FormControl isInvalid={!!error} id="economy">
          <FormLabel>{label}</FormLabel>
          <Select<SelectGroup, true, GroupBase<SelectGroup>>
            id="economy-field"
            instanceId="economy-field"
            name={name}
            ref={ref}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            options={economies.map((item) => ({
              value: item,
              label: item,
            }))}
            chakraStyles={selectStyles()}
          />
          <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
};

export default EconomiesField;
