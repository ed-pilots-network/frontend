import powers from '@/app/_lib/power-list';
import governments from '@/app/_lib/government-list';
import economies from '@/app/_lib/economy-list';
import allegiances from '@/app/_lib/allegiance-list';
import factionStates from '@/app/_lib/faction-state-list';

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
import useColorMode from '@/app/_hooks/useColorMode';
import selectColor from '@/app/_hooks/fontColorSelector';
import PowersField from '@/app/_components/inputs/Powers';
import AllegiancesField from '@/app/_components/inputs/Allegiances';
import GovernmentsField from '@/app/_components/inputs/Governments';
import PowerEffectsField from '@/app/_components/inputs/PowerEffects';
import FactionStatesField from '@/app/_components/inputs/FactionStates';
import EconomiesField from '@/app/_components/inputs/Economies';
import LandingPad from '@/app/_components/inputs/LandingPads';
import StationTypes from '@/app/_components/inputs/StationTypes';
import ShipsField from '@/app/_components/inputs/Ships';
import ModulesField from '@/app/_components/inputs/Modules';
import CommoditiesField from '@/app/_components/inputs/Commodities';
import FacilitiesField from '@/app/_components/inputs/Facilities';
import CheckboxGroup from '../form/CheckboxGroup';

export const StationFormSchema = z.object({
  station: z.string(),
  ships: z.array(z.object({ value: z.string() })).optional(),
  modules: z.array(z.object({ value: z.string() })).optional(),
  commodity: z.array(z.object({ value: z.string() })).optional(),
  facilities: z.array(z.object({ value: z.string() })).optional(),
  allegiance: z
    .enum(['', ...(allegiances.map((item) => item) as [string, ...string[]])])
    .optional(),
  government: z
    .enum(['', ...(governments.map((item) => item) as [string, ...string[]])])
    .optional(),
  system: z.string().optional(),
  landingPadSize: z.string().optional(),
  includeFleetCarriers: z.boolean().optional(),
  includeOdyssey: z.boolean().optional(),
  includePlanetary: z.boolean().optional(),
  includeOrbital: z.boolean().optional(),
  maxDistanceToArrival: z.string().optional(),
  requiresPermit: z.boolean(),
  power: z
    .enum(['', ...(powers.map((item) => item) as [string, ...string[]])])
    .optional(),
  powerEffect: z.enum(['', 'control', 'expansion', 'exploited']).optional(),
  factionState: z
    .enum(['', ...(factionStates.map((item) => item) as [string, ...string[]])])
    .optional(),
  economy: z
    .enum(['', ...(economies.map((item) => item) as [string, ...string[]])])
    .optional(),
});

export type SubmitProps = z.infer<typeof StationFormSchema>;

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
    resolver: zodResolver(StationFormSchema),
  });

  const { isDark } = useColorMode();

  const onSubmit: SubmitHandler<SubmitProps> = (data) => {
    onSubmitHandler(data);
  };

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
        <GridItem marginBottom={30} colSpan={{ base: 1, md: 2, lg: 4 }}>
          <FormControl isInvalid={!!(errors.station && errors.station.message)}>
            <FormLabel>Station</FormLabel>
            <Input
              variant="outline"
              placeholder="Search by station name..."
              borderColor={selectColor(isDark, 'border')}
              _hover={{
                borderColor: selectColor(isDark, 'border'),
              }}
              {...register('station')}
            />
            <FormErrorMessage>
              {errors.station && errors.station.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 2 }}>
          <FormControl isInvalid={!!(errors.ships && errors.ships.message)}>
            <FormLabel>Ships</FormLabel>
            <ShipsField
              control={control}
              placeholder="Find stations selling these ships..."
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 2 }}>
          <FormControl isInvalid={!!(errors.modules && errors.modules.message)}>
            <FormLabel>Modules</FormLabel>
            <ModulesField
              control={control}
              placeholder="Find stations selling these modules..."
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 2 }}>
          <FormControl
            isInvalid={!!(errors.commodity && errors.commodity.message)}
          >
            <FormLabel>Commodities</FormLabel>
            <CommoditiesField
              control={control}
              placeholder="Find stations selling these commodities..."
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 2 }}>
          <FormControl isInvalid={!!(errors.system && errors.system.message)}>
            <FormLabel>Nearest System</FormLabel>
            <Input
              variant="outline"
              placeholder="Enter system name..."
              borderColor={selectColor(isDark, 'border')}
              _hover={{
                borderColor: selectColor(isDark, 'border'),
              }}
              {...register('system')}
            />
            <FormErrorMessage>
              {errors.system && errors.system.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl
            isInvalid={!!(errors.facilities && errors.facilities.message)}
          >
            <FormLabel>Facilities</FormLabel>
            <FacilitiesField
              control={control}
              placeholder="Select facilities..."
            />
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
              borderColor={selectColor(isDark, 'border')}
              _hover={{
                borderColor: selectColor(isDark, 'border'),
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

        <GridItem>
          <FormControl
            isInvalid={!!(errors.powerEffect && errors.powerEffect.message)}
          >
            <FormLabel>Power Effect</FormLabel>
            <PowerEffectsField register={register('powerEffect')} />
            <FormErrorMessage>
              {errors.powerEffect && errors.powerEffect.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl
            isInvalid={!!(errors.factionState && errors.factionState.message)}
          >
            <FormLabel>Faction State</FormLabel>
            <FactionStatesField register={register('factionState')} />
            <FormErrorMessage>
              {errors.factionState && errors.factionState.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl isInvalid={!!(errors.economy && errors.economy.message)}>
            <FormLabel>Economy</FormLabel>
            <EconomiesField register={register('economy')} />
            <FormErrorMessage>
              {errors.economy && errors.economy.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>
      </Grid>

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
          <FormControl>
            <FormLabel>Station Type</FormLabel>
            <StationTypes register={register} />
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl
            isInvalid={
              !!(errors.landingPadSize && errors.landingPadSize.message)
            }
          >
            <FormLabel>Ship Size</FormLabel>
            <LandingPad register={register('landingPadSize')} />
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
                  borderColor={selectColor(isDark, 'border')}
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
