import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import allegiances from '@/app/_lib/allegiance-list';
import AllegiancesField from '../Allegiances';
import { SystemForm } from '../../systems/types';

describe('Allegiances Field', () => {
  beforeEach(() => {
    const Component = () => {
      const { register } = useForm<SystemForm>();

      return <AllegiancesField register={register('allegiance')} />;
    };

    render(<Component />);
  });

  it('includes the placeholder', () => {
    expect(
      screen.getByRole('option', { name: 'Select...' }),
    ).toBeInTheDocument();
  });

  it('includes the correct number of options', () => {
    expect(screen.getAllByRole('option').length).toBe(9);
  });

  it('includes all the options', () => {
    allegiances.forEach((item) => {
      expect(screen.getByRole('option', { name: item })).toHaveValue(item);
    });
  });
});
