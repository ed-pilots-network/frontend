import { render } from '@testing-library/react';
import AllegiancesField from '../Allegiances';
import { useForm } from 'react-hook-form';

jest.mock('../inputs/commodities/commodities', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValue(<input value="gold" onChange={(e) => e.target.value} />),
}));

describe('AllegiancesField', () => {
  it('should render the field', () => {
    const Component = () => {
      const { control } = useForm<{}>();

      return <AllegiancesField control={control} />;
    };

    render(<Component />);
  });
});
