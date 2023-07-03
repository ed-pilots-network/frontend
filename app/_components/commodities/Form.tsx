import {
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useColorMode from '@/app/_hooks/useColorMode';
import selectColor from '@/app/_hooks/fontColorSelector';

interface FormProps {
  commodityValues: string[];
}

interface IFormInputs {
  commodity: string;
  system: string;
  landingPadSize: string;
  planetary: boolean;
  odyssey: boolean;
  carriers: boolean;
}

const Form: React.FC<FormProps> = ({ commodityValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const { isDark } = useColorMode();
  const checkboxValues = [
    { name: 'Include Planetary', value: 'planetary' },
    { name: 'Include Odyssey', value: 'odyssey' },
    { name: 'Fleet Carriers', value: 'carriers' },
  ];

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    const formatString = (string: string) =>
      string.split(' ').join('_').toLowerCase();

    let submitData = {
      ...data,
      commodity: formatString(data.commodity),
      system: formatString(data.system),
    };
    console.log(submitData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex justifyContent="space-between" alignItems="center" paddingY="8">
        <FormControl>
          <RadioGroup aria-label="current-system-selection">
            <Stack direction="row">
              {commodityValues.length > 0 && (
                <>
                  <FormLabel ml={8} mb={0}>
                    Select:
                  </FormLabel>
                  <Flex alignItems="center" mb={8} flexWrap="wrap">
                    {commodityValues.map((commodity, index) => (
                      <Radio
                        mx={2}
                        value={commodity}
                        key={index}
                        {...register('commodity', {
                          required: true,
                          pattern: {
                            value: /^[\w\-\s]+$/,
                            message: 'Alphanumeric or spaces only.',
                          },
                          maxLength: {
                            value: 40,
                            message: 'Exceeds max length.',
                          },
                        })}
                        aria-invalid={errors.commodity ? 'true' : 'false'}
                      >
                        {commodity}
                      </Radio>
                    ))}
                  </Flex>
                </>
              )}
            </Stack>
            {errors.commodity && (
              <Text color="red" mb={3}>
                Commodity name is required
              </Text>
            )}
          </RadioGroup>
          <FormLabel>Current System</FormLabel>
          <Input
            variant="filled"
            placeholder="Enter a system..."
            {...register('system', {
              required: true,
              pattern: {
                value: /^[\w\-\s]+$/,
                message: 'Alphanumeric or spaces only.',
              },
              maxLength: {
                value: 40,
                message: 'Exceeds max length.',
              },
            })}
            aria-invalid={errors.system ? 'true' : 'false'}
            aria-label="system-search-input"
          />
          {errors.system && (
            <Text color="red" mt={3}>
              System name is required
            </Text>
          )}
          <FormLabel marginTop={8}>Optional Factors</FormLabel>
          <CheckboxGroup colorScheme="gray">
            <Stack spacing={8} direction={['column', 'row']} margin={8}>
              {checkboxValues.map((checkbox, index) => (
                <Checkbox
                  key={index}
                  {...register(`${checkbox.value}` as keyof IFormInputs)}
                  borderColor={selectColor(isDark, 'text')}
                >
                  {checkbox.name}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
          <FormLabel>Landing Pad Size</FormLabel>
          <RadioGroup defaultValue="2">
            <Stack spacing={8} direction="row" margin={8}>
              <Radio
                colorScheme="gray"
                value="small"
                borderColor={selectColor(isDark, 'text')}
                {...register('landingPadSize', { required: true })}
              >
                Small
              </Radio>
              <Radio
                colorScheme="gray"
                value="medium"
                borderColor={selectColor(isDark, 'text')}
                {...register('landingPadSize')}
              >
                Medium
              </Radio>
              <Radio
                colorScheme="gray"
                value="large"
                borderColor={selectColor(isDark, 'text')}
                {...register('landingPadSize')}
              >
                Large
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </Flex>
      <Button type="submit" colorScheme="gray" variant="solid" id="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
