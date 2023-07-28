import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Select, OptionBase, GroupBase } from 'chakra-react-select';
import { Control, Controller } from 'react-hook-form';
import selectStyles from '@/app/_hooks/selectStyles';
import useColorMode from '@/app/_hooks/useColorMode';
import powers from '@/app/_lib/power-list';
import factionStates from '@/app/_lib/faction-state-list';

interface Props {
  control: Control<any>;
  label?: string;
}

interface SelectGroup extends OptionBase {
  label: string;
  value: string;
}

const FactionStatesField: React.FC<Props> = ({
  control,
  label = 'Faction States',
}) => {
  const { isDark } = useColorMode();

  return (
    <Controller
      name="factionStates"
      control={control}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
      }) => (
        <FormControl isInvalid={!!error} id="factionStatesfactionStates">
          <FormLabel>{label}</FormLabel>
          <Select<SelectGroup, true, GroupBase<SelectGroup>>
            id="factionStates-field"
            instanceId="factionStates-field"
            name={name}
            ref={ref}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            options={factionStates.map((item) => ({
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

export default FactionStatesField;
