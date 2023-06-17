import { render, screen } from '@testing-library/react';
import PageClient from './page.client';

test('renders the heading with correct text', () => {
  render(<PageClient />);
  const headingElement = screen.getByRole('heading', { level: 2 });
  expect(headingElement).toBeInTheDocument();
  expect(headingElement.textContent).toBe('FAQ');
});
