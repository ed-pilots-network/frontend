import { render, screen } from '@testing-library/react';
import Form from './Form';

test('renders the form', () => {
  render(<Form commodityValues={['guardian relic']} />);

  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
});
