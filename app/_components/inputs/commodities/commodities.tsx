import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Select, OptionBase, GroupBase } from 'chakra-react-select';
import { Controller } from 'react-hook-form';

import React from 'react';

import commodities from '@/app/_lib/commodity-list';

interface CommodityProps {
  control: any;
}

interface CommodityGroup extends OptionBase {
  label: string;
  value: string;
}

const CommoditiesField: React.FC<CommodityProps> = ({ control }) => {
  // TODO: for now these values have leading designators that we need to remove
  // for example: 'water' is stored as 'ch_water' designated as a chemical
  // if we don't end up using this designation then we should remove it
  const formattedCommodities: CommodityGroup[] = commodities.map(
    (commodity) => ({
      value: commodity.slice(3).split('_').join(' '),
      label: commodity.slice(3).split('_').join(' '),
    }),
  );

  return (
    <Controller
      name="commodity"
      control={control}
      rules={{ required: 'Enter at least one commodity' }}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
      }) => (
        <FormControl isInvalid={!!error} id="commodity">
          <FormLabel>Commodity</FormLabel>
          <Select<CommodityGroup, true, GroupBase<CommodityGroup>>
            id="commodity-field"
            instanceId="commodity-field"
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            options={formattedCommodities}
            placeholder="Search through the commodities"
          />
          <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
};

export default CommoditiesField;
