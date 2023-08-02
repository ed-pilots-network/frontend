import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { SystemForm } from '../../systems/types';
import PowersField from '../Powers';

describe('PowersField', () => {
  beforeEach(() => {
    const Component = () => {
      const { register } = useForm<SystemForm>();

      return <PowersField register={register('powers')} />;
    };

    render(<Component />);
  });

  it('includes the placeholder', () => {
    expect(
      screen.getByRole('option', { name: 'Select...' }),
    ).toBeInTheDocument();
  });

  it('includes the correct number of options', () => {
    expect(screen.getAllByRole('option').length).toBe(12);
  });
});