import { SystemStyleObject } from '@chakra-ui/react';
import selectColor from './fontColorSelector';
import useColorMode from '@/app/_hooks/useColorMode';

const InputStyles = () => {
  const { isDark } = useColorMode();

  return {
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
};

export default InputStyles;
