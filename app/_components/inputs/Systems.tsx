import { Controller } from 'react-hook-form';
import {
  OptionBase,
  GroupBase,
  ActionMeta,
  MultiValue,
  AsyncSelect,
} from 'chakra-react-select';
import SelectStyles from '@/app/_hooks/SelectStyles';
import { ISystem } from '@/app/_types/system';

interface Props {
  control: any;
  isMulti?: boolean;
  placeholder?: string;
  onChange?: (
    newValue: MultiValue<SelectGroup>,
    actionMeta: ActionMeta<SelectGroup>,
  ) => void;
}

interface SelectGroup extends OptionBase {
  label: string;
  value: string;
}

type FieldOptions = {
  isMulti?: true;
};

/* Swap out for live lookup when data is available? */
const loadOptions = async (inputValue: string) => {
  if (inputValue.length < 3) {
    return [];
  }

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_MOCK_API_URL}/api/v1/exploration/system/by-name-containing`,
  )
    .then((response) => response.json())
    .then((response) =>
      response.map((item: ISystem) => ({
        value: item.eliteId,
        label: item.name,
      })),
    )
    .then((final) =>
      final.filter((i: SelectGroup) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase()),
      ),
    );

  return data;
};

const SystemsField = ({
  control,
  isMulti = true,
  placeholder = 'Select systems...',
  onChange,
}: Props) => {
  const fieldOptions: FieldOptions = {};
  if (isMulti) {
    fieldOptions.isMulti = true;
  }

  return (
    <Controller
      name="systems"
      control={control}
      render={({ field: { onBlur, name, ref } }) => (
        <AsyncSelect<SelectGroup, true, GroupBase<SelectGroup>>
          defaultOptions
          cacheOptions
          isClearable
          loadingMessage={() => 'Searching...'}
          noOptionsMessage={(inputValue) =>
            inputValue.inputValue.length < 3
              ? 'Enter 3 or more characters'
              : 'No results found.'
          }
          id="systems-field"
          instanceId="systems-field"
          name={name}
          ref={ref}
          loadOptions={loadOptions}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          chakraStyles={SelectStyles()}
          {...fieldOptions}
        />
      )}
    />
  );
};

export default SystemsField;
