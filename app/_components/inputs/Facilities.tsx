import { Controller } from 'react-hook-form';
import { Select, OptionBase, GroupBase } from 'chakra-react-select';
import SelectStyles from '@/app/_hooks/SelectStyles';
import facilities from '@/app/_lib/facilities-list';

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

const getOptions = () => {
  const options: SelectGroup[] = facilities.map((item) => ({
    value: item,
    label: item,
  }));

  return options;
};

const FacilitiesField = ({
  control,
  isMulti = false,
  placeholder = 'Select facilities...',
}: Props) => {
  const fieldOptions: FieldOptions = {};
  if (isMulti) {
    fieldOptions.isMulti = true;
  }

  return (
    <Controller
      name="facilities"
      control={control}
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <Select<SelectGroup, true, GroupBase<SelectGroup>>
          id="facilities-field"
          instanceId="facilities-field"
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

export default FacilitiesField;
