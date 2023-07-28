import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Select, OptionBase, GroupBase } from 'chakra-react-select';
import { Control, Controller } from 'react-hook-form';
import selectStyles from '@/app/_hooks/selectStyles';
import useColorMode from '@/app/_hooks/useColorMode';
import allegiances from '@/app/_lib/allegiance-list';

interface Props {
  control: Control<any>;
  label?: string;
}

interface SelectGroup extends OptionBase {
  label: string;
  value: string;
}

const AllegiancesField: React.FC<Props> = ({
  control,
  label = 'Allegiance',
}) => {
  const { isDark } = useColorMode();

  return (
    <Controller
      name="allegiance"
      control={control}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
      }) => (
        <FormControl isInvalid={!!error} id="allegiance">
          <FormLabel>{label}</FormLabel>
          <Select<SelectGroup, true, GroupBase<SelectGroup>>
            id="allegiance-field"
            instanceId="allegiance-field"
            name={name}
            ref={ref}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            options={allegiances.map((item) => ({
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

export default AllegiancesField;
