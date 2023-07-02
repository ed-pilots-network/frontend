import { render, screen } from '@testing-library/react';
import Form from './Form';

test('renders the form', () => {
  render(<Form />);

  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
});
