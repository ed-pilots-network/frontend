import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

test('renders the navbar with logo and toggle switch', () => {
  render(<Navbar />);

  // Logo
  const logoImage = screen.getByAltText('Logo') as HTMLImageElement;
  expect(logoImage).toBeInTheDocument();
  expect(logoImage.src).toContain('/EDPN_logo.png');

  // Text
  const logoText = screen.getByText('EDPN');
  expect(logoText).toBeInTheDocument();
  expect(logoText.tagName).toBe('P');
  expect(logoText).toHaveStyle({ fontSize: '2xl' });

  // Toggle switch
  const toggleButton = screen.getByLabelText('Toggle Dark Switch');
  expect(toggleButton).toBeInTheDocument();

  // Simulate click event on toggle button
  fireEvent.click(toggleButton);
});
