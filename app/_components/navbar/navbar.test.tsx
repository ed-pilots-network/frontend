import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

test('renders the navbar with logo and toggle switch', () => {
  // Mock env variable
  process.env = Object.assign(process.env, { NEXT_PUBLIC_STAGE: 'test-stage' });
  render(<Navbar />);

  // Logo
  const logoImage = screen.getByAltText('Logo') as HTMLImageElement;
  expect(logoImage).toBeInTheDocument();
  expect(logoImage.src).toContain('/EDPN_logo_dark_background.png');

  // Text
  const logoText = screen.getByText('EDPN');
  expect(logoText).toBeInTheDocument();
  expect(logoText.tagName).toBe('P');
  expect(logoText).toHaveStyle({ fontSize: '2xl' });

  // Server Stage
  const serverStage = screen.getByText('test-stage');
  expect(serverStage).toBeInTheDocument();

  // Toggle switch
  const toggleButton = screen.getByLabelText('Toggle Dark Switch');
  expect(toggleButton).toBeInTheDocument();

  // Simulate click event on toggle button
  fireEvent.click(toggleButton);
});
