import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Select, OptionBase, GroupBase } from 'chakra-react-select';
import { Control, Controller } from 'react-hook-form';
import selectStyles from '@/app/_hooks/selectStyles';

interface Props {
  control: Control<any>;
  label?: string;
}

interface SelectGroup extends OptionBase {
  label: string;
  value: string;
}

const RequiresPermitField: React.FC<Props> = ({
  control,
  label = 'Requires Permit',
}) => {
  return (
    <Controller
      name="requiresPermit"
      control={control}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
      }) => (
        <FormControl isInvalid={!!error} id="requiresPermit">
          <FormLabel>{label}</FormLabel>
          <Select<SelectGroup, true, GroupBase<SelectGroup>>
            id="requiresPermit-field"
            instanceId="requiresPermit-field"
            name={name}
            ref={ref}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            options={[
              { label: 'Yes', value: '1' },
              { label: 'No', value: '0' },
            ]}
            chakraStyles={selectStyles()}
          />
          <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
};

export default RequiresPermitField;
