import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Select, OptionBase, GroupBase } from 'chakra-react-select';
import { Controller } from 'react-hook-form';

import SelectStyles from '@/app/_hooks/SelectStyles';
import { ICommodity } from '@/app/_types';

interface CommodityProps {
  control: any;
  commodities: ICommodity[] | null;
}

interface CommoditySelectItems extends OptionBase {
  label: string;
  value: string;
}

const CommoditiesField: React.FC<CommodityProps> = ({
  control,
  commodities,
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

  return (
    <Controller
      name="commodityDisplayName"
      control={control}
      rules={{ required: 'Enter at least one commodity' }}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
      }) => (
        <FormControl width="100%" isInvalid={!!error} id="commodity">
          <FormLabel>Commodity</FormLabel>
          <Select<CommoditySelectItems, true, GroupBase<CommoditySelectItems>>
            id="commodity-field"
            instanceId="commodity-field"
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            options={formattedCommodities}
            placeholder="Select a commodity"
            chakraStyles={SelectStyles()}
          />
          <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
};

export default CommoditiesField;
