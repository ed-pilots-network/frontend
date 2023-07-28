import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Select, OptionBase, GroupBase } from 'chakra-react-select';
import { Control, Controller } from 'react-hook-form';
import selectStyles from '@/app/_hooks/selectStyles';
import useColorMode from '@/app/_hooks/useColorMode';
import governments from '@/app/_lib/government-list';

interface Props {
  control: Control<any>;
  label?: string;
}

interface SelectGroup extends OptionBase {
  label: string;
  value: string;
}

const GovernmentsField: React.FC<Props> = ({
  control,
  label = 'Government Type',
}) => {
  const { isDark } = useColorMode();

  return (
    <Controller
      name="government"
      control={control}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
      }) => (
        <FormControl isInvalid={!!error} id="government">
          <FormLabel>{label}</FormLabel>
          <Select<SelectGroup, true, GroupBase<SelectGroup>>
            id="government-field"
            instanceId="government-field"
            name={name}
            ref={ref}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            options={governments.map((item) => ({
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

export default GovernmentsField;
