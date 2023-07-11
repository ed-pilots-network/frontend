import { useState } from 'react';
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import useColorMode from '@/app/_hooks/useColorMode';
import selectColor from '@/app/_hooks/fontColorSelector';
import CommoditiesField from '../inputs/commodities/commodities';

export const CommodityFormSchema = z.object({
  commodityId: z.object({
    value: z.string().regex(/[a-z_]/),
  }),
  maxLandingPadSize: z.enum(['small', 'medium', 'large']),
  minDemand: z.number().nonnegative().max(1000000),
  minSupply: z.number().nonnegative().max(1000000),
  includeFleetCarriers: z.boolean(),
  includeOdyssey: z.boolean(),
  includePlanetary: z.boolean(),
  system: z.string().regex(/^[\w'-]+(?:\s[\w'-]+)*$/), // word chars, apostrophes, and dashes across multiple words
});

export type SubmitProps = z.infer<typeof CommodityFormSchema>;

interface FormProps {
  onSubmitHandler: SubmitHandler<SubmitProps>;
  isLoading: boolean;
}

const Form: React.FC<FormProps> = ({ onSubmitHandler, isLoading }) => {
  const [isBuying, setIsBuying] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SubmitProps>({
    defaultValues: {
      minDemand: 1,
      minSupply: 1,
    },
    resolver: zodResolver(CommodityFormSchema),
  });

  const { isDark } = useColorMode();

  const checkboxValues = [
    { name: 'Include Planetary', value: 'includePlanetary' },
    { name: 'Include Odyssey', value: 'includeOdyssey' },
    { name: 'Fleet Carriers', value: 'includeFleetCarriers' },
  ];

  const numberInputs = (
    label: string,
    registerName: 'minSupply' | 'minDemand',
  ) => (
    <>
      <FormLabel my="auto">{label}</FormLabel>
      <NumberInput defaultValue={1} min={1} max={1000000} precision={0}>
        <NumberInputField
          {...register(registerName, {
            max: 1000000,
            valueAsNumber: true,
          })}
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </>
  );

  const onSubmit: SubmitHandler<SubmitProps> = (data) => {
    const submitData = data;
    if (isBuying) submitData.minDemand = 0;
    if (!isBuying) submitData.minSupply = 0;
    onSubmitHandler(submitData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        paddingY="8"
        flexWrap="wrap"
      >
        <FormControl>
          <CommoditiesField control={control} />
          <FormLabel marginTop={8}>Near Star System</FormLabel>
          <Input
            variant="filled"
            placeholder="Enter a system..."
            {...register('system', {
              required: true,
              pattern: /^[\w'-]+(?:\s[\w'-]+)*$/,
              maxLength: 40,
            })}
          />
          {errors.system && (
            <Text color="red" mt={3}>
              {errors.system.message}
            </Text>
          )}
          <FormLabel marginTop={8}>Optional Factors</FormLabel>
          <CheckboxGroup colorScheme="gray">
            <Stack spacing={8} direction={['column', 'row']} margin={8}>
              {checkboxValues.map((checkbox, index) => (
                <Checkbox
                  key={index}
                  {...register(`${checkbox.value}` as keyof SubmitProps)}
                  borderColor={selectColor(isDark, 'text')}
                >
                  {checkbox.name}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
          <FormLabel>Max Landing Pad Size</FormLabel>
          <RadioGroup>
            <Stack spacing={8} direction="row" mt={8} ml={8} flexWrap="wrap">
              {['Small', 'Medium', 'Large'].map((value, index) => (
                <Radio
                  colorScheme="gray"
                  key={index}
                  value={value.toLowerCase()}
                  borderColor={selectColor(isDark, 'text')}
                  {...register('maxLandingPadSize', { required: true })}
                >
                  {value}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
          {errors.maxLandingPadSize && (
            <Text color="red" mt={3}>
              Pad size is required
            </Text>
          )}
          <Stack spacing={8} direction="row" mt={8} flexWrap="wrap">
            {isBuying ? (
              <FormLabel my="auto">Buying</FormLabel>
            ) : (
              <FormLabel my="auto">Selling</FormLabel>
            )}
            <Switch
              id="buying"
              my="auto"
              isChecked={isBuying}
              onChange={() => setIsBuying(!isBuying)}
            />
            {isBuying && numberInputs('Minimum Supply', 'minSupply')}
            {!isBuying && numberInputs('Minimum Demand', 'minDemand')}
            {errors.minSupply && (
              <Text color="red" mt={3}>
                {errors.minSupply.message as string}
              </Text>
            )}
            {errors.minDemand && (
              <Text color="red" mt={3}>
                {errors.minDemand.message as string}
              </Text>
            )}
          </Stack>
        </FormControl>
      </Flex>
      <Button
        type="submit"
        colorScheme="gray"
        variant="solid"
        id="submit"
        isLoading={isLoading}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
