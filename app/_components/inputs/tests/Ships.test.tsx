import { act, render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { ChakraProvider, FormControl, FormLabel } from '@chakra-ui/react';
import selectEvent from 'react-select-event';
import ShipsField from '../Ships';
import { StationForm } from '@/app/_types/station';

const Component = ({ isMulti = false }: { isMulti?: boolean }) => {
  const { control } = useForm<StationForm>();

  return (
    <ChakraProvider>
      <ShipsField control={control} isMulti={isMulti} />
    </ChakraProvider>
  );
};

const SHIPS = [
  'Adder',
  'Alliance Challenger',
  'Alliance Chieftain',
  'Alliance Crusader',
  'Anaconda',
  'Asp Explorer',
  'Asp Scout',
  'Beluga Liner',
  'Cobra MkIII',
  'Cobra MkIV',
  'Diamondback Explorer',
  'Diamondback Scout',
  'Dolphin',
  'Eagle MkII',
  'Federal Assault Ship',
  'Federal Corvette',
  'Federal Dropship',
  'Federal Gunship',
  'Fer-de-Lance',
  'Hauler',
  'Imperial Clipper',
  'Imperial Courier',
  'Imperial Cutter',
  'Imperial Eagle',
  'Keelback',
  'Krait MkII',
  'Krait Phantom',
  'Mamba',
  'Orca',
  'Python',
  'Sidewinder MkI',
  'Type-6 Transporter',
  'Type-7 Transporter',
  'Type-9 Heavy',
  'Type-10 Defender',
  'Viper MkIII',
  'Viper MkIV',
  'Vulture',
];

describe('Ships Field', () => {
  it('renders', () => {
    render(<Component />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('loads with the correct options', () => {
    render(
      <form data-testid="form">
        <label htmlFor="ships">Ships</label>
        <Component />
      </form>,
    );

    const selectElement = screen.getByRole('combobox');

    expect(screen.queryByText('Anaconda')).toBeNull();

    act(() => {
      selectEvent.openMenu(selectElement);
    });

    SHIPS.forEach((item) => {
      expect(screen.queryByText(item)).toBeInTheDocument();
    });
  });

  it('allows single select by default', async () => {
    const { getByTestId, getByLabelText } = render(
      <form data-testid="form">
        <FormControl>
          <FormLabel>Ships</FormLabel>
          <Component />
        </FormControl>
      </form>,
    );

    const selectElement = getByLabelText('Ships');

    expect(getByTestId('form')).toHaveFormValues({});

    act(() => {
      selectEvent.openMenu(selectElement);
    });

    // Select item
    await act(async () => {
      await selectEvent.select(selectElement, 'Anaconda');
    });

    // Check item is selected
    expect(getByTestId('form')).toHaveFormValues({
      ships: 'Anaconda',
    });

    act(() => {
      selectEvent.openMenu(selectElement);
    });

    // Select item
    await act(async () => {
      await selectEvent.select(selectElement, 'Vulture');
    });

    // Check both items are selected
    expect(getByTestId('form')).toHaveFormValues({
      ships: 'Vulture',
    });
  });

  it('allows multi select when enabled', async () => {
    const { getByTestId, getByLabelText } = render(
      <form data-testid="form">
        <FormControl>
          <FormLabel>Ships</FormLabel>
          <Component isMulti={true} />
        </FormControl>
      </form>,
    );

    const selectElement = getByLabelText('Ships');

    expect(getByTestId('form')).toHaveFormValues({});

    act(() => {
      selectEvent.openMenu(selectElement);
    });

    // Select item
    await act(async () => {
      await selectEvent.select(selectElement, 'Anaconda');
    });

    // Check item is selected
    expect(getByTestId('form')).toHaveFormValues({
      ships: 'Anaconda',
    });

    act(() => {
      selectEvent.openMenu(selectElement);
    });

    // Select item
    await act(async () => {
      await selectEvent.select(selectElement, 'Vulture');
    });

    // Check both items are selected
    expect(getByTestId('form')).toHaveFormValues({
      ships: ['Anaconda', 'Vulture'],
    });
  });
});
