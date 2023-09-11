import { act, fireEvent, render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { StationForm } from '@/app/_types/station';
import { ChakraProvider } from '@chakra-ui/react';
import StationsField from '@/app/_components/inputs/Stations';
import selectEvent from 'react-select-event';

const Component = ({ isMulti = false }: { isMulti?: boolean }) => {
  const { control } = useForm<StationForm>();

  return (
    <ChakraProvider>
      <StationsField fieldName="stations" control={control} isMulti={isMulti} />
    </ChakraProvider>
  );
};

const MOCK_STATIONS = [
  { name: 'Daedalus' },
  { name: 'Ehrlich City' },
  { name: 'Abraham Lincoln' },
  { name: 'Mars High' },
  { name: 'Titan City' },
  { name: "Dekker's Yard" },
  { name: 'Durrance Camp' },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_STATIONS),
  }),
) as jest.Mock;

describe('Systems Field', () => {
  it('renders', () => {
    render(<Component />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('loads the options and restricts to single select by default', async () => {
    const { getByTestId } = render(
      <form data-testid="form">
        <label htmlFor="stations">Station</label>
        <Component />
      </form>,
    );

    expect(getByTestId('form')).toHaveFormValues({ stations: '' });

    await act(async () => {
      await fireEvent.change(screen.getByRole('combobox'), {
        target: { value: 'abr' },
      });
    });

    await act(async () => {
      await selectEvent.select(screen.getByRole('combobox'), 'Abraham Lincoln');
    });

    await act(() => {
      expect(getByTestId('form')).toHaveFormValues({
        stations: 'Abraham Lincoln',
      });
    });

    await act(async () => {
      await fireEvent.change(screen.getByRole('combobox'), {
        target: { value: 'aed' },
      });
    });

    await act(async () => {
      await selectEvent.select(screen.getByRole('combobox'), 'Daedalus');
    });

    await act(() => {
      expect(getByTestId('form')).toHaveFormValues({
        stations: 'Daedalus',
      });
    });
  });

  it('loads the options and allows multi select when enabled', async () => {
    const { getByTestId } = render(
      <form data-testid="form">
        <label htmlFor="stations">Station</label>
        <Component isMulti={true} />
      </form>,
    );

    expect(getByTestId('form')).toHaveFormValues({ stations: '' });

    await act(async () => {
      await fireEvent.change(screen.getByRole('combobox'), {
        target: { value: 'abr' },
      });
    });

    await act(async () => {
      await selectEvent.select(screen.getByRole('combobox'), 'Abraham Lincoln');
    });

    await act(async () => {
      await fireEvent.change(screen.getByRole('combobox'), {
        target: { value: 'aed' },
      });
    });

    await act(async () => {
      await selectEvent.select(screen.getByRole('combobox'), 'Daedalus');
    });

    await act(async () => {
      expect(getByTestId('form')).toHaveFormValues({
        stations: ['Abraham Lincoln', 'Daedalus'],
      });
    });
  });
});
