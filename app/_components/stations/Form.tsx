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
import PowersField from '../inputs/Powers';
import AllegiancesField from '../inputs/Allegiances';
import GovernmentsField from '../inputs/Governments';
import PowerEffectsField from '../inputs/PowerEffects';
import FactionStatesField from '../inputs/FactionStates';
import EconomiesField from '../inputs/Economies';
import Select from '../inputs/form/Select';

export const StationFormSchema = z.object({
  station: z.string(),
  ships: z.string(),
  modules: z.string(),
  minorFaction: z.string().optional(),
  allegiance: z
    .enum(['', ...(allegiances.map((item) => item) as [string, ...string[]])])
    .optional(),
  government: z
    .enum(['', ...(governments.map((item) => item) as [string, ...string[]])])
    .optional(),
  landingPadSize: z.string().optional(),
  maxDistanceToArrival: z.number().optional(),
  facilities: z.string().optional(),
  commodities: z.string().optional(),
  stationType: z.string().optional(),
  requiresPermit: z.boolean(),
  power: z
    .enum(['', ...(powers.map((item) => item) as [string, ...string[]])])
    .optional(),
  powerEffect: z.enum(['', 'Control', 'Expansion', 'Exploited']).optional(),
  factionState: z
    .enum(['', ...(factionStates.map((item) => item) as [string, ...string[]])])
    .optional(),
  economy: z
    .enum(['', ...(economies.map((item) => item) as [string, ...string[]])])
    .optional(),
  nearestSystem: z.string(),
});

export type SubmitProps = z.infer<typeof StationFormSchema>;

interface FormProps {
  onSubmitHandler: SubmitHandler<SubmitProps>;
  isLoading: boolean;
}

const Form: React.FC<FormProps> = ({ onSubmitHandler, isLoading }) => {
  const {
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
              placeholder="Search by system name..."
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

        <GridItem>
          <FormControl isInvalid={!!(errors.ships && errors.ships.message)}>
            <FormLabel>Ships (placeholder)</FormLabel>
            <Input
              variant="outline"
              placeholder="Search by system name..."
              borderColor={selectColor(isDark, 'border')}
              _hover={{
                borderColor: selectColor(isDark, 'border'),
              }}
              {...register('ships')}
            />
            <FormErrorMessage>
              {errors.ships && errors.ships.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl isInvalid={!!(errors.modules && errors.modules.message)}>
            <FormLabel>Modules (placeholder)</FormLabel>
            <Input
              variant="outline"
              placeholder="Search by system name..."
              borderColor={selectColor(isDark, 'border')}
              _hover={{
                borderColor: selectColor(isDark, 'border'),
              }}
              {...register('modules')}
            />
            <FormErrorMessage>
              {errors.modules && errors.modules.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 2, lg: 3 }}>
          <FormControl
            isInvalid={!!(errors.minorFaction && errors.minorFaction.message)}
          >
            <FormLabel>Minor Faction</FormLabel>
            <Input
              borderColor={selectColor(isDark, 'border')}
              variant="outline"
              placeholder="Enter a minor faction..."
              {...register('minorFaction')}
            />
            <FormErrorMessage>
              {errors.minorFaction && errors.minorFaction.message}
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
              !!(errors.landingPadSize && errors.landingPadSize.message)
            }
          >
            <FormLabel>Landing Pad Size (placeholder)</FormLabel>
            <Input
              variant="outline"
              placeholder="Search by system name..."
              borderColor={selectColor(isDark, 'border')}
              _hover={{
                borderColor: selectColor(isDark, 'border'),
              }}
              {...register('landingPadSize')}
            />
            <FormErrorMessage>
              {errors.landingPadSize && errors.landingPadSize.message}
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
            <FormLabel>Max Distance to Arrival (placeholder)</FormLabel>
            <Input
              variant="outline"
              placeholder="Search by system name..."
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
          <FormControl
            isInvalid={!!(errors.facilities && errors.facilities.message)}
          >
            <FormLabel>Max Distance to Arrival (placeholder)</FormLabel>
            <Input
              variant="outline"
              placeholder="Search by system name..."
              borderColor={selectColor(isDark, 'border')}
              _hover={{
                borderColor: selectColor(isDark, 'border'),
              }}
              {...register('facilities')}
            />
            <FormErrorMessage>
              {errors.facilities && errors.facilities.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl
            isInvalid={!!(errors.commodities && errors.commodities.message)}
          >
            <FormLabel>Commodities (placeholder)</FormLabel>
            <Input
              variant="outline"
              placeholder="Search by system name..."
              borderColor={selectColor(isDark, 'border')}
              _hover={{
                borderColor: selectColor(isDark, 'border'),
              }}
              {...register('commodities')}
            />
            <FormErrorMessage>
              {errors.commodities && errors.commodities.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl
            isInvalid={!!(errors.stationType && errors.stationType.message)}
          >
            <FormLabel>Station Type (placeholder)</FormLabel>
            <Input
              variant="outline"
              placeholder="Search by system name..."
              borderColor={selectColor(isDark, 'border')}
              _hover={{
                borderColor: selectColor(isDark, 'border'),
              }}
              {...register('stationType')}
            />
            <FormErrorMessage>
              {errors.stationType && errors.stationType.message}
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
        <GridItem>
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
