import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Select, OptionBase, GroupBase } from 'chakra-react-select';
import { Controller } from 'react-hook-form';

import * as capitalize from 'capitalize';

import React from 'react';

import commodities from '@/app/_lib/commodity-list';

const dontCap = { skipWord: /^(a|the|an|and|or|but|in|on|of|it)$/ };

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

  // TODO: while commodity names are now capitalised, names which contain acronyms such as CMM Composites are not capitalised correctly
  const formattedCommodities: CommodityGroup[] = commodities.map(
    (commodity) => ({
      value: commodity.slice(3).split('_').join(' '),
      label: capitalize.words(commodity.slice(3).split('_').join(' '), dontCap),
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
            placeholder="Select a commodity"
          />
          <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
};

export default CommoditiesField;
