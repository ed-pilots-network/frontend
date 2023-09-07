import { Controller } from 'react-hook-form';
import {
  OptionBase,
  GroupBase,
  AsyncSelect,
  MultiValue,
} from 'chakra-react-select';
import SelectStyles from '@/app/_hooks/SelectStyles';
import { IStation } from '@/app/_types/station';
import { ChangeEvent } from 'react';

interface Props {
  fieldName: string;
  control: any;
  isMulti?: boolean;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (
    e: ChangeEvent<HTMLSelectElement> | MultiValue<SelectGroup>,
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
    `${process.env.NEXT_PUBLIC_MOCK_API_URL}/api/v1/exploration/station/by-name-containing`,
  )
    .then((response) => response.json())
    .then((response) =>
      response.map((item: IStation) => ({
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

const StationsField = ({
  fieldName,
  control,
  isMulti = false,
  placeholder = 'Search for a station...',
  disabled = false,
  onChange,
}: Props) => {
  const fieldOptions: FieldOptions = {};
  if (isMulti) {
    fieldOptions.isMulti = true;
  }

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({
        field: { name, ref, value, onChange: internalOnChange, onBlur },
      }) => (
        <AsyncSelect<SelectGroup, true, GroupBase<SelectGroup>>
          cacheOptions
          isClearable
          loadingMessage={() => 'Searching...'}
          noOptionsMessage={(inputValue) =>
            inputValue.inputValue.length < 3
              ? 'Enter 3 or more characters'
              : 'No results found.'
          }
          id={`${fieldName}-field`}
          instanceId={`${fieldName}-field`}
          name={name}
          ref={ref}
          isDisabled={disabled}
          loadOptions={loadOptions}
          onChange={(e) => {
            internalOnChange(e);
            if (onChange) {
              onChange(e);
            }
          }}
          onBlur={onBlur}
          placeholder={placeholder}
          chakraStyles={SelectStyles()}
          value={value}
          {...fieldOptions}
        />
      )}
    />
  );
};

export default StationsField;
