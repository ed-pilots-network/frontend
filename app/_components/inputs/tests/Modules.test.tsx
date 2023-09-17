import { act, render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { ChakraProvider, FormControl, FormLabel } from '@chakra-ui/react';
import selectEvent from 'react-select-event';
import ModulesField from '../Modules';
import { StationForm } from '@/app/_types/station';

const Component = ({ isMulti = false }: { isMulti?: boolean }) => {
  const { control } = useForm<StationForm>();

  return (
    <ChakraProvider>
      <ModulesField control={control} isMulti={isMulti} />
    </ChakraProvider>
  );
};

const MODULES = [
  '1I Detailed Surface Scanner',
  '2E Frame Shift Drive',
  '0E Kill Warrant Scanner',
  '1E Supercruise Assist',
];

describe('Modules Field', () => {
  it('renders', () => {
    render(<Component />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('loads with the correct options', () => {
    render(
      <form data-testid="form">
        <label htmlFor="modules">Modules</label>
        <Component />
      </form>,
    );

    const selectElement = screen.getByRole('combobox');

    expect(screen.queryByText('1I Detailed Surface Scanner')).toBeNull();

    act(() => {
      selectEvent.openMenu(selectElement);
    });

    MODULES.forEach((item) => {
      expect(screen.queryByText(item)).toBeInTheDocument();
    });
  });

  it('allows single select by default', async () => {
    const { getByTestId, getByLabelText } = render(
      <form data-testid="form">
        <FormControl>
          <FormLabel>Modules</FormLabel>
          <Component />
        </FormControl>
      </form>,
    );

    const selectElement = getByLabelText('Modules');

    expect(getByTestId('form')).toHaveFormValues({});

    act(() => {
      selectEvent.openMenu(selectElement);
    });

    // Select item
    await act(async () => {
      await selectEvent.select(selectElement, '2E Frame Shift Drive');
    });

    // Check item is selected
    expect(getByTestId('form')).toHaveFormValues({
      modules: '2E Frame Shift Drive',
    });

    act(() => {
      selectEvent.openMenu(selectElement);
    });

    // Select item
    await act(async () => {
      await selectEvent.select(selectElement, '1E Supercruise Assist');
    });

    // Check both items are selected
    expect(getByTestId('form')).toHaveFormValues({
      modules: '1E Supercruise Assist',
    });
  });

  it('allows multi select when enabled', async () => {
    const { getByTestId, getByLabelText } = render(
      <form data-testid="form">
        <FormControl>
          <FormLabel>Modules</FormLabel>
          <Component isMulti={true} />
        </FormControl>
      </form>,
    );

    const selectElement = getByLabelText('Modules');

    expect(getByTestId('form')).toHaveFormValues({});

    act(() => {
      selectEvent.openMenu(selectElement);
    });

    // Select item
    await act(async () => {
      await selectEvent.select(selectElement, '2E Frame Shift Drive');
    });

    // Check item is selected
    expect(getByTestId('form')).toHaveFormValues({
      modules: '2E Frame Shift Drive',
    });

    act(() => {
      selectEvent.openMenu(selectElement);
    });

    // Select item
    await act(async () => {
      await selectEvent.select(selectElement, '1E Supercruise Assist');
    });

    // Check both items are selected
    expect(getByTestId('form')).toHaveFormValues({
      modules: ['2E Frame Shift Drive', '1E Supercruise Assist'],
    });
  });
});
