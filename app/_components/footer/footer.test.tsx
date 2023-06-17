import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders the footer with correct text', () => {
  render(<Footer />);

  const footerElement = screen.getByRole('contentinfo');
  expect(footerElement).toBeInTheDocument();
  expect(footerElement.textContent).toBe('Engineered by the EDPN Team');
});
