import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { SystemForm } from '../../systems/types';
import PowerEffectsField from '../PowerEffects';

describe('PowerEffectsField', () => {
  beforeEach(() => {
    const Component = () => {
      const { register } = useForm<SystemForm>();

      return <PowerEffectsField register={register('economy')} />;
    };

    render(<Component />);
  });

  it('includes the placeholder', () => {
    expect(
      screen.getByRole('option', { name: 'Select...' }),
    ).toBeInTheDocument();
  });

  it('includes the correct number of options', () => {
    expect(screen.getAllByRole('option').length).toBe(4);
  });
});
