import powers from '@/app/_lib/power-list';
import governments from '@/app/_lib/government-list';
import allegiances from '@/app/_lib/allegiance-list';
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  FormErrorMessage,
  Checkbox,
} from '@chakra-ui/react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import GetColor from '@/app/_hooks/colorSelector';
import {
  PowersField,
  AllegiancesField,
  GovernmentsField,
  LandingPadsField,
  StationTypesField,
  CommoditiesField,
} from '@/app/_components/inputs';
import CheckboxGroup from '../../form/CheckboxGroup';
import { useState } from 'react';
import SystemsField from '../../inputs/Systems';
import Select from '../../inputs/form/Select';

export const SingleTradeRouteFormSchema = z.object({
  buySystem: z.object({ value: z.number() }).optional(),
  buyStation: z.string().optional(),
  sellSystem: z.object({ value: z.number() }).optional(),
  sellStation: z.string().optional(),

  commodityId: z.array(z.object({ value: z.string() })).optional(),
  minSupply: z.string().optional(),
  minDemand: z.string().optional(),
  maxPriceAge: z.string().optional(),
  cargoCapacity: z.string().optional(),
  availableCredits: z.string().optional(),

  government: z
    .enum(['', ...(governments.map((item) => item) as [string, ...string[]])])
    .optional(),
  allegiance: z
    .enum(['', ...(allegiances.map((item) => item) as [string, ...string[]])])
    .optional(),
  requiresPermit: z.boolean(),
  landingPadSize: z.string().optional(),
  maxDistanceToArrival: z.string().optional(),
  includeFleetCarriers: z.boolean().optional(),
  includeOdyssey: z.boolean().optional(),
  includePlanetary: z.boolean().optional(),
  includeOrbital: z.boolean().optional(),
  power: z
    .enum(['', ...(powers.map((item) => item) as [string, ...string[]])])
    .optional(),
});

export type SubmitProps = z.infer<typeof SingleTradeRouteFormSchema>;

interface FormProps {
  onSubmitHandler: SubmitHandler<SubmitProps>;
  isLoading: boolean;
}

const Form: React.FC<FormProps> = ({ onSubmitHandler, isLoading }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitProps>({
    resolver: zodResolver(SingleTradeRouteFormSchema),
  });

  const onSubmit: SubmitHandler<SubmitProps> = (data) => {
    console.log(data);
    onSubmitHandler(data);
  };

  // For demo purposes
  const [buySystemStations, setBuySystemStations] = useState<string[]>([]);
  const [sellSystemStations, setSellSystemStations] = useState<string[]>([]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={6}
        marginBottom="10"
      >
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <FormControl
            isInvalid={!!(errors.buySystem && errors.buySystem.message)}
          >
            <FormLabel>Buy from System</FormLabel>
            <SystemsField
              fieldName="buySystem"
              control={control}
              placeholder="Select a system..."
              isMulti={false}
              onChange={(newValue) => {
                setBuySystemStations(
                  newValue ? ['Station1', 'Station2', 'Station3'] : [],
                );
              }}
            />
            <FormErrorMessage>
              {errors.buySystem && errors.buySystem.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 2 }}>
          <FormControl
            isInvalid={!!(errors.buyStation && errors.buyStation.message)}
          >
            <FormLabel>Buy from Station</FormLabel>
            <Select
              register={register('buyStation', {
                disabled: buySystemStations.length === 0,
              })}
              placeholder={
                buySystemStations.length === 0
                  ? 'Enter a system first...'
                  : 'Select a station (optional)'
              }
            >
              {buySystemStations.length &&
                buySystemStations.map((station) => (
                  <option key={station} value={station}>
                    {station}
                  </option>
                ))}
            </Select>
            <FormErrorMessage>
              {errors.buyStation && errors.buyStation.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 2 }}>
          <FormControl
            isInvalid={!!(errors.sellSystem && errors.sellSystem.message)}
          >
            <FormLabel>Sell to System</FormLabel>
            <SystemsField
              fieldName="sellSystem"
              control={control}
              placeholder="Select a system..."
              isMulti={false}
              onChange={(newValue) => {
                setSellSystemStations(
                  newValue ? ['Station1', 'Station2', 'Station3'] : [],
                );
              }}
            />
            <FormErrorMessage>
              {errors.sellSystem && errors.sellSystem.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 2 }}>
          <FormControl
            isInvalid={!!(errors.sellStation && errors.sellStation.message)}
          >
            <FormLabel>Sell to Station</FormLabel>
            <Select
              register={register('sellStation', {
                disabled: sellSystemStations.length === 0,
              })}
              placeholder={
                sellSystemStations.length === 0
                  ? 'Enter a system first...'
                  : 'Select a station (optional)'
              }
            >
              {sellSystemStations.length &&
                sellSystemStations.map((station) => (
                  <option key={station} value={station}>
                    {station}
                  </option>
                ))}
            </Select>
            <FormErrorMessage>
              {errors.sellStation && errors.sellStation.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem marginTop={30} colSpan={{ base: 4 }}>
          <h2>
            <b>Route options:</b>
          </h2>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 3 }}>
          <FormControl
            isInvalid={!!(errors.commodityId && errors.commodityId.message)}
          >
            <FormLabel>Commodities</FormLabel>
            <CommoditiesField
              control={control}
              placeholder="Select commodities..."
            />
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl
            isInvalid={!!(errors.cargoCapacity && errors.cargoCapacity.message)}
          >
            <FormLabel>Cargo Capacity</FormLabel>
            <Input
              type="number"
              variant="outline"
              placeholder="Enter a number..."
              borderColor={GetColor('border')}
              _hover={{
                borderColor: GetColor('border'),
              }}
              {...register('cargoCapacity')}
            />
            <FormErrorMessage>
              {errors.cargoCapacity && errors.cargoCapacity.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl
            isInvalid={!!(errors.minSupply && errors.minSupply.message)}
          >
            <FormLabel>Min. Supply</FormLabel>
            <Input
              type="number"
              variant="outline"
              placeholder="Enter a number..."
              borderColor={GetColor('border')}
              _hover={{
                borderColor: GetColor('border'),
              }}
              {...register('minSupply')}
              defaultValue={1}
            />
            <FormErrorMessage>
              {errors.minSupply && errors.minSupply.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl
            isInvalid={!!(errors.minDemand && errors.minDemand.message)}
          >
            <FormLabel>Min. Demand</FormLabel>
            <Input
              type="number"
              variant="outline"
              placeholder="Enter a number..."
              borderColor={GetColor('border')}
              _hover={{
                borderColor: GetColor('border'),
              }}
              {...register('minDemand')}
              defaultValue={1}
            />
            <FormErrorMessage>
              {errors.minDemand && errors.minDemand.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl
            isInvalid={
              !!(errors.availableCredits && errors.availableCredits.message)
            }
          >
            <FormLabel>Available Credits</FormLabel>
            <Input
              type="number"
              variant="outline"
              placeholder="Enter a number..."
              borderColor={GetColor('border')}
              _hover={{
                borderColor: GetColor('border'),
              }}
              {...register('availableCredits')}
            />
            <FormErrorMessage>
              {errors.availableCredits && errors.availableCredits.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl
            isInvalid={!!(errors.maxPriceAge && errors.maxPriceAge.message)}
          >
            <FormLabel>Max Price Age</FormLabel>
            <Input
              type="number"
              variant="outline"
              placeholder="Enter a number..."
              borderColor={GetColor('border')}
              _hover={{
                borderColor: GetColor('border'),
              }}
              {...register('maxPriceAge')}
            />
            <FormErrorMessage>
              {errors.maxPriceAge && errors.maxPriceAge.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem marginTop={30} colSpan={{ base: 4 }}>
          <h2>
            <b>Station options:</b>
          </h2>
        </GridItem>

        <GridItem>
          <FormControl
            isInvalid={!!(errors.government && errors.government.message)}
          >
            <FormLabel>Government</FormLabel>
            <GovernmentsField register={register('government')} />
            <FormErrorMessage>
              {errors.government && errors.government.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl
            isInvalid={!!(errors.allegiance && errors.allegiance.message)}
          >
            <FormLabel>Allegiance</FormLabel>
            <AllegiancesField register={register('allegiance')} />
            <FormErrorMessage>
              {errors.allegiance && errors.allegiance.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl
            isInvalid={
              !!(
                errors.maxDistanceToArrival &&
                errors.maxDistanceToArrival.message
              )
            }
          >
            <FormLabel>Max Distance From Star</FormLabel>
            <Input
              type="number"
              variant="outline"
              placeholder="In LS"
              borderColor={GetColor('border')}
              _hover={{
                borderColor: GetColor('border'),
              }}
              {...register('maxDistanceToArrival')}
            />
            <FormErrorMessage>
              {errors.maxDistanceToArrival &&
                errors.maxDistanceToArrival.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl isInvalid={!!(errors.power && errors.power.message)}>
            <FormLabel>Powers</FormLabel>
            <PowersField register={register('power')} />
            <FormErrorMessage>
              {errors.power && errors.power.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 2 }}>
          <FormControl>
            <FormLabel>Station Type</FormLabel>
            <StationTypesField register={register} />
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl
            isInvalid={
              !!(errors.landingPadSize && errors.landingPadSize.message)
            }
          >
            <FormLabel>Ship Size</FormLabel>
            <LandingPadsField register={register('landingPadSize')} />
            <FormErrorMessage>
              {errors.landingPadSize && errors.landingPadSize.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl>
            <FormLabel>Other Options</FormLabel>
            <CheckboxGroup>
              <FormControl
                isInvalid={
                  !!(errors.requiresPermit && errors.requiresPermit.message)
                }
              >
                <Checkbox
                  colorScheme="orange"
                  {...register('requiresPermit')}
                  borderColor={GetColor('border')}
                >
                  Requires Permit
                </Checkbox>
                <FormErrorMessage>
                  {errors.requiresPermit && errors.requiresPermit.message}
                </FormErrorMessage>
              </FormControl>
            </CheckboxGroup>
          </FormControl>
        </GridItem>
      </Grid>

      <Button
        type="submit"
        variant="customButton"
        id="submit"
        isLoading={isLoading}
      >
        Find Stations
      </Button>
    </form>
  );
};

export default Form;
