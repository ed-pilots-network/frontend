import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Select, OptionBase, GroupBase } from 'chakra-react-select';
import { Control, Controller } from 'react-hook-form';
import selectStyles from '@/app/_hooks/selectStyles';
import useColorMode from '@/app/_hooks/useColorMode';

interface Props {
  control: Control<any>;
  label?: string;
}

interface SelectGroup extends OptionBase {
  label: string;
  value: string;
}

const PowerEffectsField: React.FC<Props> = ({
  control,
  label = 'Power Effects',
}) => {
  const { isDark } = useColorMode();

  return (
    <Controller
      name="powerEffects"
      control={control}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
      }) => (
        <FormControl isInvalid={!!error} id="powerEffects">
          <FormLabel>{label}</FormLabel>
          <Select<SelectGroup, true, GroupBase<SelectGroup>>
            id="powerEffects-field"
            instanceId="powerEffects-field"
            name={name}
            ref={ref}
            onBlur={onBlur}
            value={value}
            options={[
              { label: 'Control', value: 'control' },
              { label: 'Expansion', value: 'expansion' },
              { label: 'Exploited', value: 'exploited' },
            ]}
            chakraStyles={selectStyles(isDark)}
          />
          <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
};

export default PowerEffectsField;
