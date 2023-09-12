import { act, render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { ChakraProvider, FormControl, FormLabel } from '@chakra-ui/react';
import FacilitiesField from '../Facilities';
import selectEvent from 'react-select-event';
import { StationForm } from '@/app/_types/forms';

const Component = ({ isMulti = false }: { isMulti?: boolean }) => {
  const { control } = useForm<StationForm>();

  return (
    <ChakraProvider>
      <FacilitiesField control={control} isMulti={isMulti} />
    </ChakraProvider>
  );
};

describe('Facilities Field', () => {
  it('renders', () => {
    render(<Component />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('loads with the correct options', () => {
    render(
      <form data-testid="form">
        <label htmlFor="facilities">Facility</label>
        <Component />
      </form>,
    );

    const selectElement = screen.getByRole('combobox');

    expect(screen.queryByText('Black Market')).toBeNull();

    selectEvent.openMenu(selectElement);

    [
      'Black Market',
      'Fleet Carrier Administration',
      'Fleet Carrier Vendor',
      'Interstellar Factors',
      'Market',
      'Refuel',
      'Repair',
      'Restock',
      'Outfitting',
      'Shipyard',
      'Social Space',
      'Material Trader',
      'Technology Broker',
      'Universal Cartographics',
    ].forEach((item) => {
      expect(screen.queryByText(item)).toBeInTheDocument();
    });
  });

  it('allows single select by default', async () => {
    const { getByTestId, getByLabelText } = render(
      <form data-testid="form">
        <FormControl>
          <FormLabel>Facilities</FormLabel>
          <Component />
        </FormControl>
      </form>,
    );

    const selectElement = getByLabelText('Facilities');

    expect(getByTestId('form')).toHaveFormValues({});

    selectEvent.openMenu(selectElement);

    // Select item
    await act(async () => {
      await selectEvent.select(selectElement, 'Black Market');
    });

    // Check item is selected
    expect(getByTestId('form')).toHaveFormValues({
      facilities: 'Black Market',
    });

    selectEvent.openMenu(selectElement);

    // Select item
    await act(async () => {
      await selectEvent.select(selectElement, 'Refuel');
    });

    // Check both items are selected
    expect(getByTestId('form')).toHaveFormValues({
      facilities: 'Refuel',
    });
  });

  it('allows multi select when enabled', async () => {
    const { getByTestId, getByLabelText } = render(
      <form data-testid="form">
        <FormControl>
          <FormLabel>Facilities</FormLabel>
          <Component isMulti={true} />
        </FormControl>
      </form>,
    );

    const selectElement = getByLabelText('Facilities');

    expect(getByTestId('form')).toHaveFormValues({});

    selectEvent.openMenu(selectElement);

    // Select item
    await act(async () => {
      await selectEvent.select(selectElement, 'Black Market');
    });

    // Check item is selected
    expect(getByTestId('form')).toHaveFormValues({
      facilities: 'Black Market',
    });

    selectEvent.openMenu(selectElement);

    // Select item
    await act(async () => {
      await selectEvent.select(selectElement, 'Refuel');
    });

    // Check both items are selected
    expect(getByTestId('form')).toHaveFormValues({
      facilities: ['Black Market', 'Refuel'],
    });
  });
});
