import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { StationForm } from '@/app/_types/station';
import { ChakraProvider } from '@chakra-ui/react';
import StationsField from '@/app/_components/inputs/Stations';

describe('Systems Field', () => {
  beforeEach(() => {
    const Component = () => {
      const { control } = useForm<StationForm>();

      return (
        <ChakraProvider>
          <StationsField fieldName="testField" control={control} />
        </ChakraProvider>
      );
    };

    render(<Component />);
  });

  it('renders', () => {
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
