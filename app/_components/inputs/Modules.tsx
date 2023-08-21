import { Controller } from 'react-hook-form';
import { Select, OptionBase, GroupBase } from 'chakra-react-select';
import SelectStyles from '@/app/_hooks/SelectStyles';
import modules from '@/app/_lib/module-list';

interface Props {
  control: any;
  isMulti?: boolean;
  placeholder?: string;
}

interface SelectGroup extends OptionBase {
  label: string;
  value: string;
}

type FieldOptions = {
  isMulti?: true;
};

/* Swap out for live lookup when data is available? */
const getOptions = () => {
  const options: SelectGroup[] = modules.map((item) => ({
    value: item,
    label: item,
  }));

  return options;
};

const ModulesField = ({
  control,
  isMulti = true,
  placeholder = 'Select modules...',
}: Props) => {
  const fieldOptions: FieldOptions = {};
  if (isMulti) {
    fieldOptions.isMulti = true;
  }
  return (
    <Controller
      name="modules"
      control={control}
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <Select<SelectGroup, true, GroupBase<SelectGroup>>
          id="modules-field"
          instanceId="modules-field"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          options={getOptions()}
          placeholder={placeholder}
          chakraStyles={SelectStyles()}
          {...fieldOptions}
        />
      )}
    />
  );
};

export default ModulesField;
