import { render, screen } from '@testing-library/react';
import PageClient from './page.client';

test('Template Page - renders the heading with correct text', () => {
  render(<PageClient serverData={[]} />);
  const headingElement = screen.getByRole('heading', { level: 1 });
  expect(headingElement).toBeInTheDocument();
  expect(headingElement.textContent).toBe('Heading goes here');
});
