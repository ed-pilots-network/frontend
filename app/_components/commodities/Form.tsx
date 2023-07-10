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
import { useState } from 'react';
import useColorMode from '@/app/_hooks/useColorMode';
import selectColor from '@/app/_hooks/fontColorSelector';
import CommoditiesField from '../inputs/commodities/commodities';

const CommodityFormSchema = z.object({
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
  referenceLocation: z
    .object({
      xcoordinate: z.number(),
      ycoordinate: z.number(),
      zcoordinate: z.number(),
    })
    .optional(), // until the flow is established for these values i've marked them as optional - aslink87
});

type SubmitProps = z.infer<typeof CommodityFormSchema>;

const Form: React.FC = () => {
  const [isBuying, setIsBuying] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SubmitProps>({
    defaultValues: {
      minDemand: 0,
      minSupply: 0,
    },
    resolver: zodResolver(CommodityFormSchema),
  });

  const { isDark } = useColorMode();
  const checkboxValues = [
    { name: 'Include Planetary', value: 'includePlanetary' },
    { name: 'Include Odyssey', value: 'includeOdyssey' },
    { name: 'Fleet Carriers', value: 'includeFleetCarriers' },
  ];

  const onSubmit: SubmitHandler<SubmitProps> = (data) => {
    const formatString = (string: string) =>
      string.split(' ').join('_').toLowerCase();

    const validatedData = CommodityFormSchema.safeParse(data);

    interface ReqBody extends Omit<SubmitProps, 'commodityId'> {
      commodityId: string;
    }

    let submitData: ReqBody = {
      ...data,
      commodityId: formatString(data.commodityId.value),
      system: formatString(data.system),
      minDemand: Number(data.minDemand),
      minSupply: Number(data.minSupply),
      referenceLocation: {
        xcoordinate: 0,
        ycoordinate: 0,
        zcoordinate: 0,
      },
    };

    if (!validatedData.success) {
      console.log(validatedData.error);
    }
    console.log(submitData);
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
              pattern: /^[\w\-\s]+$/,
              maxLength: 40,
            })}
            aria-invalid={errors.system ? 'true' : 'false'}
            aria-label="system-search-input"
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
              <Radio
                colorScheme="gray"
                value="small"
                borderColor={selectColor(isDark, 'text')}
                {...register('maxLandingPadSize', { required: true })}
              >
                Small
              </Radio>
              <Radio
                colorScheme="gray"
                value="medium"
                borderColor={selectColor(isDark, 'text')}
                {...register('maxLandingPadSize', { required: true })}
              >
                Medium
              </Radio>
              <Radio
                colorScheme="gray"
                value="large"
                borderColor={selectColor(isDark, 'text')}
                {...register('maxLandingPadSize', { required: true })}
              >
                Large
              </Radio>
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
            {isBuying && (
              <>
                <FormLabel my="auto">Minimum Supply</FormLabel>
                <NumberInput
                  defaultValue={0}
                  min={1}
                  max={1000000}
                  precision={0}
                >
                  <NumberInputField
                    {...register('minSupply', {
                      min: 1,
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
            )}
            {!isBuying && (
              <>
                <FormLabel my="auto">Minimum Demand</FormLabel>
                <NumberInput
                  defaultValue={0}
                  min={0}
                  max={1000000}
                  precision={0}
                >
                  <NumberInputField
                    {...register('minDemand', {
                      min: 1,
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
            )}
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
      <Button type="submit" colorScheme="gray" variant="solid" id="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
