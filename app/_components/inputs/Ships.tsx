import { Controller } from 'react-hook-form';
import { Select, OptionBase, GroupBase } from 'chakra-react-select';
import SelectStyles from '@/app/_hooks/SelectStyles';
import ships from '@/app/_lib/ship-list';
import { useState } from 'react';
import { exactThenFuzzySort } from '@/app/_lib/utils/sort';

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
  const options: SelectGroup[] = ships.map((item) => ({
    value: item,
    label: item,
  }));

  return options;
};

const ShipsField = ({
  control,
  isMulti = false,
  placeholder = 'Select ships...',
}: Props) => {
  const fieldOptions: FieldOptions = {};
  if (isMulti) {
    fieldOptions.isMulti = true;
  }

  const [options, setOptions] = useState(getOptions());

  return (
    <Controller
      name="ships"
      control={control}
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <Select<SelectGroup, true, GroupBase<SelectGroup>>
          id="ships-field"
          instanceId="ships-field"
          name={name}
          ref={ref}
          onInputChange={(input) => {
            exactThenFuzzySort(input, getOptions(), setOptions);
          }}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          options={options}
          placeholder={placeholder}
          chakraStyles={SelectStyles()}
          {...fieldOptions}
        />
      )}
    />
  );
};

export default ShipsField;
