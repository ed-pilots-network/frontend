import { render, screen } from '@testing-library/react';
import Form from './Form';

it('should render the basic fields', () => {
  render(<Form onSubmitHandler={() => {}} isLoading={false} />);

  expect(screen.getByRole('textbox', { name: 'Station' })).toBeInTheDocument();

  expect(
    screen.getByRole('textbox', { name: 'Minor Faction' }),
  ).toBeInTheDocument();

  expect(
    screen.getByRole('button', { name: /Find Systems/i }),
  ).toBeInTheDocument();
});
