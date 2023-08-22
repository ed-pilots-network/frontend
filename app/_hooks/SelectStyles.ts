import { SystemStyleObject } from '@chakra-ui/react';
import GetColor from './colorSelector';

// eslint-disable-next-line arrow-body-style
const SelectStyles = () => {
  return {
    control: (baseStyles: SystemStyleObject, state: any) => ({
      ...baseStyles,
      borderColor: GetColor('border'),
      borderBottomLeftRadius: state.menuIsOpen ? 0 : 'md',
      borderBottomRightRadius: state.menuIsOpen ? 0 : 'md',
      focusBorderColor: GetColor('border'),
      _hover: {
        borderColor: GetColor('border'),
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
};

export default SelectStyles;
