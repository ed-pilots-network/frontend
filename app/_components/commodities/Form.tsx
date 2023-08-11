import { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  FormErrorMessage,
} from '@chakra-ui/react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import useColorMode from '@/app/_hooks/useColorMode';
import selectColor from '@/app/_hooks/fontColorSelector';
import { ICommodity, ICommodityFormRequest } from '@/app/_types/commodity';
import {
  CommoditiesField,
  LandingPadsField,
  StationTypesField,
} from '../inputs';

export const CommodityFormSchema = z.object({
  commodityDisplayName: z.object({
    value: z.string().regex(/[a-zA-Z_-]/),
  }),
  maxLandingPadSize: z.string(),
  minDemand: z.number().nonnegative().max(50000000).optional(),
  minSupply: z.number().nonnegative().max(50000000).optional(),
  includeFleetCarriers: z.boolean().optional(),
  includeOdyssey: z.boolean().optional(),
  includePlanetary: z.boolean().optional(),
  includeOrbital: z.boolean().optional(),
  system: z.string().optional(),
});

export type SubmitProps = z.infer<typeof CommodityFormSchema>;

interface FormProps {
  onSubmitHandler: SubmitHandler<SubmitProps>;
  isLoading: boolean;
  commodities: ICommodity[] | null;
}

const Form: React.FC<FormProps> = ({
  onSubmitHandler,
  isLoading,
  commodities,
}) => {
  const [isBuying, setIsBuying] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ICommodityFormRequest>({
    defaultValues: {
      minDemand: 1,
      minSupply: 1,
    },
    resolver: zodResolver(CommodityFormSchema),
  });

  const { isDark } = useColorMode();

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
        max={50000000}
        precision={0}
        borderColor={selectColor(isDark, 'border')}
      >
        <NumberInputField
          {...register(registerName, {
            max: 50000000,
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
        direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
      >
        <Stack
          direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
          width="100%"
          spacing={4}
        >
          <FormControl
            isInvalid={
              !!(
                errors.commodityDisplayName &&
                errors.commodityDisplayName.message
              )
            }
          >
            <CommoditiesField control={control} commodities={commodities} />
            <FormErrorMessage>
              {errors.commodityDisplayName &&
                errors.commodityDisplayName.message}
            </FormErrorMessage>
          </FormControl>
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
                maxLength: 40,
              })}
            />
            <FormErrorMessage>
              {errors.system && errors.system.message}
            </FormErrorMessage>
          </FormControl>
        </Stack>
        <Stack
          direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
          spacing={4}
          width="100%"
          marginTop={4}
        >
          <FormControl width="100%">
            <FormLabel>Include</FormLabel>
            <StationTypesField register={register} />
          </FormControl>
          <FormControl
            width="100%"
            isInvalid={
              !!(errors.maxLandingPadSize && errors.maxLandingPadSize.message)
            }
          >
            <FormLabel>Min Landing Pad Size</FormLabel>
            <LandingPadsField register={register('maxLandingPadSize')} />
          </FormControl>
        </Stack>
        <Stack
          direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
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
              >
                Buy
              </Button>
              <Button
                variant={isBuying ? 'outline' : 'customButton'}
                onClick={() => setIsBuying(false)}
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
