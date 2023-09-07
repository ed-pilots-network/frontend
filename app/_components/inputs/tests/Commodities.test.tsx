import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { SystemForm } from '@/app/_types/system';
import { ChakraProvider } from '@chakra-ui/react';
import CommoditiesField from '../Commodities';

describe('Commodities Field', () => {
  beforeEach(() => {
    const Component = () => {
      const { control } = useForm<SystemForm>();

      return (
        <ChakraProvider>
          <CommoditiesField control={control} commodities={null} />
        </ChakraProvider>
      );
    };

    render(<Component />);
  });

  it('renders', () => {
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
