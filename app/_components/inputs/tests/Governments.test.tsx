import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { SystemForm } from '@/app/_types/system';
import GovernmentsField from '../Governments';
import governments from '@/app/_lib/government-list';

describe('GovernmentsField', () => {
  beforeEach(() => {
    const Component = () => {
      const { register } = useForm<SystemForm>();

      return <GovernmentsField register={register('government')} />;
    };

    render(<Component />);
  });

  it('includes the placeholder', () => {
    expect(
      screen.getByRole('option', { name: 'Select...' }),
    ).toBeInTheDocument();
  });

  it('includes the correct number of options', () => {
    expect(screen.getAllByRole('option').length).toBe(17);
  });

  it('includes all the options', () => {
    governments.forEach((item) => {
      expect(screen.getByRole('option', { name: item })).toHaveValue(item);
    });
  });
});
