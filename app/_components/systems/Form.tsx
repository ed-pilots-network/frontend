import powers from '@/app/_lib/power-list';
import governments from '@/app/_lib/government-list';
import securities from '@/app/_lib/security-list';
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
} from '@chakra-ui/react';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import useColorMode from '@/app/_hooks/useColorMode';
import selectColor from '@/app/_hooks/fontColorSelector';
import { Select, OptionBase, GroupBase } from 'chakra-react-select';
import selectStyles from '@/app/_hooks/selectStyles';

const powerEffectOptions = ['Control', 'Expansion', 'Exploited'];

export const SystemFormSchema = z.object({
  system: z.string().regex(/[A-Za-z\ ]/),
  onlyPopulated: z.enum(['1', '0']),
  allegiance: z.enum(allegiances.map((item) => item) as [string, ...string[]]),
  government: z.enum(governments.map((item) => item) as [string, ...string[]]),
  primaryEconomy: z.enum(
    economies.map((item) => item) as [string, ...string[]],
  ),
  minorFaction: z.string().regex(/[A-Za-z\ ]/),
  presenceType: z.string().regex(/[A-Za-z\ ]/),
  needsPermit: z.enum(['yes', 'no']),
  stationFilter: z.enum([
    'hasStations',
    'hasPlanetary',
    'hasOrbital',
    'hasNoStations',
  ]),
  powers: z.enum(powers.map((item) => item) as [string, ...string[]]),
  powerEffects: z.enum(
    powerEffectOptions.map((item) => item) as [string, ...string[]],
  ),
  referenceSystem: z.string().regex(/[A-Za-z\ ]/),
  securities: z.enum(securities.map((item) => item) as [string, ...string[]]),
  factionStates: z.string().regex(/[A-Za-z\ ]/),
});

export type SubmitProps = z.infer<typeof SystemFormSchema>;

interface FormProps {
  onSubmitHandler: SubmitHandler<SubmitProps>;
  isLoading: boolean;
}

const Form: React.FC<FormProps> = ({ onSubmitHandler, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SubmitProps>({
    resolver: zodResolver(SystemFormSchema),
  });

  const { isDark } = useColorMode();
  const chakraSelectStyles = selectStyles(isDark);

  const onSubmit: SubmitHandler<SubmitProps> = (data) => {
    onSubmitHandler(data);
  };

  interface SelectGroup extends OptionBase {
    label: string;
    value: string;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} marginBottom="10">
        <GridItem w="100%" colSpan={4}>
          <FormControl
            isInvalid={!!(errors.onlyPopulated && errors.onlyPopulated.message)}
          >
            <FormLabel>System</FormLabel>
            <Input
              variant="outline"
              placeholder="Search by system name..."
              borderColor={selectColor(isDark, 'border')}
              _hover={{
                borderColor: selectColor(isDark, 'border'),
              }}
              {...register('onlyPopulated', {
                required: true,
                pattern: /^[\w'-]+(?:\s[\w'-]+)*$/,
                maxLength: 40,
              })}
            />
            <FormErrorMessage>
              {errors.onlyPopulated && errors.onlyPopulated.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem w="100%" colSpan={4}>
          <h5>
            <b>SEARCH</b>
          </h5>
        </GridItem>

        <GridItem w="100%">
          <Controller
            name="onlyPopulated"
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <FormControl isInvalid={!!error} id="onlyPopulated">
                <FormLabel>Only Populated Systems</FormLabel>
                <Select<SelectGroup, true, GroupBase<SelectGroup>>
                  id="onlyPopulated-field"
                  instanceId="onlyPopulated-field"
                  name={name}
                  ref={ref}
                  onBlur={onBlur}
                  value={value}
                  options={[
                    { label: 'Yes', value: '1' },
                    { label: 'No', value: '0' },
                  ]}
                  chakraStyles={chakraSelectStyles}
                />
                <FormErrorMessage>{error && error.message}</FormErrorMessage>
              </FormControl>
            )}
          />
        </GridItem>

        <GridItem w="100%">
          <Controller
            name="allegiance"
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <FormControl isInvalid={!!error} id="allegiance">
                <FormLabel>Allegiance</FormLabel>
                <Select<SelectGroup, true, GroupBase<SelectGroup>>
                  id="allegiance-field"
                  instanceId="allegiance-field"
                  name={name}
                  ref={ref}
                  onBlur={onBlur}
                  value={value}
                  options={allegiances.map((item) => ({
                    value: item,
                    label: item,
                  }))}
                  chakraStyles={chakraSelectStyles}
                />
                <FormErrorMessage>{error && error.message}</FormErrorMessage>
              </FormControl>
            )}
          />
        </GridItem>

        <GridItem w="100%">
          <Controller
            name="government"
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <FormControl isInvalid={!!error} id="government">
                <FormLabel>Government Type</FormLabel>
                <Select<SelectGroup, true, GroupBase<SelectGroup>>
                  id="government-field"
                  instanceId="government-field"
                  name={name}
                  ref={ref}
                  onBlur={onBlur}
                  value={value}
                  options={governments.map((item) => ({
                    value: item,
                    label: item,
                  }))}
                  chakraStyles={chakraSelectStyles}
                />
                <FormErrorMessage>{error && error.message}</FormErrorMessage>
              </FormControl>
            )}
          />
        </GridItem>

        <GridItem w="100%">
          <Controller
            name="primaryEconomy"
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <FormControl isInvalid={!!error} id="economy">
                <FormLabel>Economy Type</FormLabel>
                <Select<SelectGroup, true, GroupBase<SelectGroup>>
                  id="economy-field"
                  instanceId="economy-field"
                  name={name}
                  ref={ref}
                  onBlur={onBlur}
                  value={value}
                  options={economies.map((item) => ({
                    value: item,
                    label: item,
                  }))}
                  chakraStyles={chakraSelectStyles}
                />
                <FormErrorMessage>{error && error.message}</FormErrorMessage>
              </FormControl>
            )}
          />
        </GridItem>

        <GridItem w="100%" colSpan={3}>
          <FormControl
            isInvalid={!!(errors.minorFaction && errors.minorFaction.message)}
          >
            <FormLabel>Minor Faction</FormLabel>
            <Input
              variant="outline"
              placeholder="Search for a minor faction..."
              borderColor={selectColor(isDark, 'border')}
              _hover={{
                borderColor: selectColor(isDark, 'border'),
              }}
              {...register('minorFaction', {
                required: true,
                pattern: /^[\w'-]+(?:\s[\w'-]+)*$/,
                maxLength: 40,
              })}
            />
            <FormErrorMessage>
              {errors.minorFaction && errors.minorFaction.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem w="100%">
          <Controller
            name="presenceType"
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <FormControl isInvalid={!!error} id="presenceType">
                <FormLabel>Presence Type</FormLabel>
                <Select<SelectGroup, true, GroupBase<SelectGroup>>
                  id="presenceType-field"
                  instanceId="presenceType-field"
                  name={name}
                  ref={ref}
                  onBlur={onBlur}
                  value={value}
                  options={[
                    { label: 'Presence', value: 'presence' },
                    { label: 'Controlling', value: 'controlling' },
                  ]}
                  chakraStyles={chakraSelectStyles}
                />
                <FormErrorMessage>{error && error.message}</FormErrorMessage>
              </FormControl>
            )}
          />
        </GridItem>

        <GridItem w="100%">
          <Controller
            name="needsPermit"
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <FormControl isInvalid={!!error} id="needsPermit">
                <FormLabel>Needs Permit?</FormLabel>
                <Select<SelectGroup, true, GroupBase<SelectGroup>>
                  id="needsPermit-field"
                  instanceId="needsPermit-field"
                  name={name}
                  ref={ref}
                  onBlur={onBlur}
                  value={value}
                  options={[
                    { label: 'Yes', value: '1' },
                    { label: 'No', value: '0' },
                  ]}
                  chakraStyles={chakraSelectStyles}
                />
                <FormErrorMessage>{error && error.message}</FormErrorMessage>
              </FormControl>
            )}
          />
        </GridItem>

        <GridItem w="100%">
          <Controller
            name="stationFilter"
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <FormControl isInvalid={!!error} id="stationFilter">
                <FormLabel>Station Filter</FormLabel>
                <Select<SelectGroup, true, GroupBase<SelectGroup>>
                  id="stationFilter-field"
                  instanceId="stationFilter-field"
                  name={name}
                  ref={ref}
                  onBlur={onBlur}
                  value={value}
                  options={[
                    { label: 'Has Stations', value: 'hasStations' },
                    { label: 'Has Planetary', value: 'hasPlanetary' },
                    { label: 'Has Orbital', value: 'hasOrbital' },
                    { label: 'Has No Stations', value: 'hasNoStations' },
                  ]}
                  chakraStyles={chakraSelectStyles}
                />
                <FormErrorMessage>{error && error.message}</FormErrorMessage>
              </FormControl>
            )}
          />
        </GridItem>

        <GridItem w="100%">
          <Controller
            name="powers"
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <FormControl isInvalid={!!error} id="powers">
                <FormLabel>Powers</FormLabel>
                <Select<SelectGroup, true, GroupBase<SelectGroup>>
                  id="powers-field"
                  instanceId="powers-field"
                  name={name}
                  ref={ref}
                  onBlur={onBlur}
                  value={value}
                  options={powers.map((item) => ({
                    value: item,
                    label: item,
                  }))}
                  chakraStyles={chakraSelectStyles}
                />
                <FormErrorMessage>{error && error.message}</FormErrorMessage>
              </FormControl>
            )}
          />
        </GridItem>

        <GridItem w="100%">
          <Controller
            name="powerEffects"
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <FormControl isInvalid={!!error} id="powerEffects">
                <FormLabel>Power Effects</FormLabel>
                <Select<SelectGroup, true, GroupBase<SelectGroup>>
                  id="powerEffects-field"
                  instanceId="powerEffects-field"
                  name={name}
                  ref={ref}
                  onBlur={onBlur}
                  value={value}
                  options={powerEffectOptions.map((item) => ({
                    value: item,
                    label: item,
                  }))}
                  chakraStyles={chakraSelectStyles}
                />
                <FormErrorMessage>{error && error.message}</FormErrorMessage>
              </FormControl>
            )}
          />
        </GridItem>

        <GridItem w="100%" colSpan={2}>
          <FormControl
            isInvalid={
              !!(errors.referenceSystem && errors.referenceSystem.message)
            }
          >
            <FormLabel>Reference System</FormLabel>
            <Input
              variant="outline"
              placeholder="Enter a system..."
              borderColor={selectColor(isDark, 'border')}
              _hover={{
                borderColor: selectColor(isDark, 'border'),
              }}
              {...register('presenceType', {
                required: true,
                pattern: /^[\w'-]+(?:\s[\w'-]+)*$/,
                maxLength: 40,
              })}
            />
            <FormErrorMessage>
              {errors.referenceSystem && errors.referenceSystem.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>

        <GridItem w="100%">
          <Controller
            name="securities"
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <FormControl isInvalid={!!error} id="securities">
                <FormLabel>Securities</FormLabel>
                <Select<SelectGroup, true, GroupBase<SelectGroup>>
                  id="securities-field"
                  instanceId="securities-field"
                  name={name}
                  ref={ref}
                  onBlur={onBlur}
                  value={value}
                  options={securities.map((item) => ({
                    value: item,
                    label: item,
                  }))}
                  chakraStyles={chakraSelectStyles}
                />
                <FormErrorMessage>{error && error.message}</FormErrorMessage>
              </FormControl>
            )}
          />
        </GridItem>

        <GridItem w="100%">
          <Controller
            name="factionStates"
            control={control}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <FormControl isInvalid={!!error} id="factionStatesfactionStates">
                <FormLabel>Faction States</FormLabel>
                <Select<SelectGroup, true, GroupBase<SelectGroup>>
                  id="factionStates-field"
                  instanceId="factionStates-field"
                  name={name}
                  ref={ref}
                  onBlur={onBlur}
                  value={value}
                  options={factionStates.map((item) => ({
                    value: item,
                    label: item,
                  }))}
                  chakraStyles={chakraSelectStyles}
                />
                <FormErrorMessage>{error && error.message}</FormErrorMessage>
              </FormControl>
            )}
          />
        </GridItem>
      </Grid>
      <Button
        type="submit"
        variant="customButton"
        id="submit"
        isLoading={isLoading}
      >
        Find Systems
      </Button>
    </form>
  );
};

export default Form;
