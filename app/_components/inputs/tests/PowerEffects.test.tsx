import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { SystemForm } from '@/app/_types/system';
import PowerEffectsField from '../PowerEffects';

describe('PowerEffectsField', () => {
  beforeEach(() => {
    const Component = () => {
      const { register } = useForm<SystemForm>();

      return <PowerEffectsField register={register('powerEffect')} />;
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

  it('includes all the options', () => {
    expect(screen.getByRole('option', { name: 'Control' })).toHaveValue(
      'control',
    );
    expect(screen.getByRole('option', { name: 'Expansion' })).toHaveValue(
      'expansion',
    );
    expect(screen.getByRole('option', { name: 'Exploited' })).toHaveValue(
      'exploited',
    );
  });
});
