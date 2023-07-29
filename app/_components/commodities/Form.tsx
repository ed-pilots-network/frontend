import { useState } from 'react';
import { CheckIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
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
  FormErrorMessage,
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
    { name: 'Planetary', value: 'includePlanetary' },
    { name: 'Odyssey', value: 'includeOdyssey' },
    { name: 'Fleet Carriers', value: 'includeFleetCarriers' },
  ];

  const numberInputs = (
    label: string,
    registerName: 'minSupply' | 'minDemand',
  ) => (
    <>
      <FormLabel marginY="auto" width="140px">
        {label}
      </FormLabel>
      <NumberInput
        marginTop={2}
        defaultValue={1}
        min={1}
        max={1000000}
        precision={0}
        borderColor={selectColor(isDark, 'border')}
      >
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
        paddingBottom="8"
        flexWrap="wrap"
        direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
      >
        <Stack
          direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
          width="100%"
          spacing={4}
        >
          <CommoditiesField control={control} />
          <FormControl
            width="100%"
            isInvalid={!!(errors.system && errors.system.message)}
          >
            <FormLabel>Near Star System</FormLabel>
            <Input
              variant="outline"
              placeholder="Enter a system..."
              borderColor={selectColor(isDark, 'border')}
              _hover={{
                borderColor: selectColor(isDark, 'border'),
              }}
              {...register('system', {
                required: true,
                pattern: /^[\w'-]+(?:\s[\w'-]+)*$/,
                maxLength: 40,
              })}
            />
            <FormErrorMessage>
              {errors.system && errors.system.message}
            </FormErrorMessage>
          </FormControl>
        </Stack>
        <Stack
          direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
          spacing={4}
          width="100%"
          marginTop={4}
        >
          <FormControl width="100%">
            <FormLabel>Include</FormLabel>
            <Stack
              borderWidth="1px"
              borderRadius="md"
              borderColor={selectColor(isDark, 'border')}
              padding={3}
              spacing={5}
              direction="row"
            >
              <CheckboxGroup colorScheme="gray">
                {checkboxValues.map((checkbox, index) => (
                  <Checkbox
                    colorScheme="orange"
                    key={index}
                    {...register(`${checkbox.value}` as keyof SubmitProps)}
                    borderColor={selectColor(isDark, 'border')}
                  >
                    {checkbox.name}
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </Stack>
          </FormControl>
          <FormControl
            width="100%"
            isInvalid={
              !!(errors.maxLandingPadSize && errors.maxLandingPadSize.message)
            }
          >
            <FormLabel>Landing Pad Size</FormLabel>
            <RadioGroup>
              <Stack
                borderWidth="1px"
                borderRadius="md"
                borderColor={selectColor(isDark, 'border')}
                padding={3}
                spacing={5}
                direction="row"
              >
                {['Small', 'Medium', 'Large'].map((value, index) => (
                  <Radio
                    colorScheme="orange"
                    key={index}
                    value={value.toLowerCase()}
                    borderColor={selectColor(isDark, 'border')}
                    {...register('maxLandingPadSize', {
                      required: true,
                    })}
                  >
                    {value}
                  </Radio>
                ))}
                <FormErrorMessage marginY="auto">
                  {errors.maxLandingPadSize && 'Select a landing pad size'}
                </FormErrorMessage>
              </Stack>
            </RadioGroup>
          </FormControl>
        </Stack>
        <Stack
          direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
          spacing={4}
          width="100%"
          marginTop={4}
        >
          <FormControl
            width="100%"
            isInvalid={!!errors.minSupply || !!errors.minDemand}
          >
            <FormLabel>I am looking to:</FormLabel>
            <ButtonGroup
              isAttached
              borderColor={selectColor(isDark, 'border')}
              variant="outline"
            >
              <Button
                variant={isBuying ? 'customButton' : 'outline'}
                onClick={() => setIsBuying(true)}
                leftIcon={<CheckIcon />}
              >
                Buy
              </Button>
              <Button
                variant={isBuying ? 'outline' : 'customButton'}
                onClick={() => setIsBuying(false)}
                leftIcon={<CheckIcon />}
              >
                Sell
              </Button>
            </ButtonGroup>
          </FormControl>
          <FormControl width="100%">
            {isBuying && numberInputs('Minimum Supply', 'minSupply')}
            {!isBuying && numberInputs('Minimum Demand', 'minDemand')}
            <FormErrorMessage>
              {errors.minSupply &&
                isBuying &&
                (errors.minSupply.message as string)}
              {errors.minDemand &&
                !isBuying &&
                (errors.minDemand.message as string)}
            </FormErrorMessage>
          </FormControl>
        </Stack>
      </Flex>
      <Button
        type="submit"
        variant="customButton"
        id="submit"
        isLoading={isLoading}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
