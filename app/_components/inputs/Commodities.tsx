import { Select, OptionBase, GroupBase } from 'chakra-react-select';
import { Controller } from 'react-hook-form';

import SelectStyles from '@/app/_hooks/SelectStyles';
import { ICommodity } from '@/app/_types';

interface CommodityProps {
  control: any;
  commodities: ICommodity[] | null;
  isMulti?: boolean;
  placeholder?: string;
}

interface CommoditySelectItems extends OptionBase {
  label: string;
  value: string;
}

type FieldOptions = {
  isMulti?: true;
};

const CommoditiesField: React.FC<CommodityProps> = ({
  control,
  commodities,
  isMulti = false,
  placeholder = 'Select a commodity...',
}) => {
  let formattedCommodities: CommoditySelectItems[] = [];

  if (!commodities) {
    formattedCommodities.push({
      value: '',
      label: 'Failed to load commodities',
    });
  } else {
    formattedCommodities = commodities.map((commodity) => ({
      value: commodity.displayName,
      label: commodity.displayName,
    }));
  }

  const fieldOptions: FieldOptions = {};
  if (isMulti) {
    fieldOptions.isMulti = true;
  }

  return (
    <Controller
      name="commodityDisplayName"
      control={control}
      rules={{ required: 'Enter at least one commodity' }}
      render={({ field: { onChange, onBlur, value, name, ref } }) => (
        <Select<CommoditySelectItems, true, GroupBase<CommoditySelectItems>>
          id="commodityDisplayName"
          instanceId="commodityDisplayName"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          options={formattedCommodities}
          placeholder={placeholder}
          chakraStyles={SelectStyles()}
          {...fieldOptions}
        />
      )}
    />
  );
};

export default CommoditiesField;
