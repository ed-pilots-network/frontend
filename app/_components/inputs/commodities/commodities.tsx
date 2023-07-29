import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  SystemStyleObject,
} from '@chakra-ui/react';
import { Select, OptionBase, GroupBase } from 'chakra-react-select';
import { Controller } from 'react-hook-form';

import React from 'react';

import commodities from '@/app/_lib/commodity-list';
import useColorMode from '@/app/_hooks/useColorMode';
import selectColor from '@/app/_hooks/fontColorSelector';

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

  const { isDark } = useColorMode();

  const customStyles = {
    control: (baseStyles: SystemStyleObject, state: any) => ({
      ...baseStyles,
      borderColor: selectColor(isDark, 'border'),
      borderBottomLeftRadius: state.menuIsOpen ? 0 : 'md',
      borderBottomRightRadius: state.menuIsOpen ? 0 : 'md',
      focusBorderColor: selectColor(isDark, 'border'),
      _hover: {
        borderColor: selectColor(isDark, 'border'),
      },
      _focus: {
        border: 'none',
      },
    }),
    dropdownIndicator: (baseStyles: SystemStyleObject) => ({
      ...baseStyles,
      paddingX: 3,
    }),
    menu: (baseStyles: SystemStyleObject) => ({
      ...baseStyles,
      margin: 0,
      padding: 0,
    }),
    menuList: (baseStyles: SystemStyleObject) => ({
      ...baseStyles,
      margin: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderColor: 'blue.300',
    }),
    group: (baseStyles: SystemStyleObject) => ({
      ...baseStyles,
      paddingY: '20px',
    }),
  };

  return (
    <Controller
      name="commodityId"
      control={control}
      rules={{ required: 'Enter at least one commodity' }}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
      }) => (
        <FormControl width="100%" isInvalid={!!error} id="commodity">
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
            chakraStyles={customStyles}
          />
          <FormErrorMessage>{error && error.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
};

export default CommoditiesField;
