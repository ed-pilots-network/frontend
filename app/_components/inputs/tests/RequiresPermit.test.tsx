import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { SystemForm } from '../../systems/types';
import RequiresPermitField from '../RequiresPermit';

describe('RequiresPermitField', () => {
  beforeEach(() => {
    const Component = () => {
      const { register } = useForm<SystemForm>();

      return <RequiresPermitField register={register('requiresPermit')} />;
    };

    render(<Component />);
  });

  it('includes the placeholder', () => {
    expect(
      screen.getByRole('option', { name: 'Select...' }),
    ).toBeInTheDocument();
  });

  it('includes the correct number of options', () => {
    expect(screen.getAllByRole('option').length).toBe(3);
  });

  it('includes all the options', () => {
    expect(screen.getByRole('option', { name: 'Yes' })).toHaveValue('1');
    expect(screen.getByRole('option', { name: 'No' })).toHaveValue('0');
  });
});
