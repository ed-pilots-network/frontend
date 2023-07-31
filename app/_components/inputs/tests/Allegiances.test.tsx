import { render } from '@testing-library/react';
import AllegiancesField from '../Allegiances';
import { useForm } from 'react-hook-form';

describe('AllegiancesField', () => {
  it('should render the field', () => {
    const Component = () => {
      const { control } = useForm<{}>();

      return <AllegiancesField control={control} />;
    };

    render(<Component />);
  });
});
