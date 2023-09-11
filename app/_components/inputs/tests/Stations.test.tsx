import { act, fireEvent, render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { StationForm } from '@/app/_types/station';
import { ChakraProvider } from '@chakra-ui/react';
import StationsField from '@/app/_components/inputs/Stations';
import selectEvent from 'react-select-event';
import { ChangeEvent } from 'react';
import { MultiValue, OptionBase } from 'chakra-react-select';

const Component = ({
  isMulti = false,
  onChange,
}: {
  isMulti?: boolean;
  onChange?: (
    e: ChangeEvent<HTMLSelectElement> | MultiValue<SelectGroup>,
  ) => void;
}) => {
  const { control } = useForm<StationForm>();

  return (
    <ChakraProvider>
      <StationsField
        fieldName="stations"
        control={control}
        isMulti={isMulti}
        onChange={onChange || (() => {})}
      />
    </ChakraProvider>
  );
};

interface SelectGroup extends OptionBase {
  label: string;
  value: string;
}

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

    const selectElement = screen.getByRole('combobox');

    expect(getByTestId('form')).toHaveFormValues({ stations: '' });

    // Search for abr
    await act(async () => {
      await fireEvent.change(selectElement, {
        target: { value: 'abr' },
      });
    });

    // Select Abraham Lincoln
    await act(async () => {
      await selectEvent.select(selectElement, 'Abraham Lincoln');
    });

    // Check that Abraham Lincoln is selected
    await act(() => {
      expect(getByTestId('form')).toHaveFormValues({
        stations: 'Abraham Lincoln',
      });
    });

    // Search for aed
    await act(async () => {
      await fireEvent.change(selectElement, {
        target: { value: 'aed' },
      });
    });

    // Select Daedalus
    await act(async () => {
      await selectEvent.select(selectElement, 'Daedalus');
    });

    // Check that only Daedalus is selected
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

    const selectElement = screen.getByRole('combobox');

    expect(getByTestId('form')).toHaveFormValues({ stations: '' });

    // Search for abr
    await act(async () => {
      await fireEvent.change(selectElement, {
        target: { value: 'abr' },
      });
    });

    // Select Abraham Lincoln
    await act(async () => {
      await selectEvent.select(selectElement, 'Abraham Lincoln');
    });

    // Check that Abraham Lincoln is selected
    await act(async () => {
      await fireEvent.change(selectElement, {
        target: { value: 'aed' },
      });
    });

    // Select for Daedalus
    await act(async () => {
      await selectEvent.select(selectElement, 'Daedalus');
    });

    // Check that Daedalus is selected
    await act(async () => {
      expect(getByTestId('form')).toHaveFormValues({
        stations: ['Abraham Lincoln', 'Daedalus'],
      });
    });
  });

  it('fires a custom onChange event', async () => {
    let onChangeHasRun = false;

    render(
      <form data-testid="form">
        <label htmlFor="stations">Station</label>
        <Component
          onChange={() => {
            onChangeHasRun = true;
          }}
        />
      </form>,
    );

    const selectElement = screen.getByRole('combobox');

    // Search for abr
    await act(async () => {
      await fireEvent.change(selectElement, {
        target: { value: 'abr' },
      });
    });

    // Select Abraham Lincoln
    await act(async () => {
      await selectEvent.select(selectElement, 'Abraham Lincoln');
    });

    // Check onChange has been run
    expect(onChangeHasRun).toBe(true);
  });
});
