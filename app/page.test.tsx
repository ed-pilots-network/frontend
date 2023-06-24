import { render, screen } from '@testing-library/react';
import PageClient from './page.client';

jest.mock('./_components/module-launch-pad/ModuleLaunchPad', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue(<div>Mocked Module Launch Pad</div>),
}));

test('renders the heading with correct text', () => {
  render(<PageClient />);
  const headingElement = screen.getByRole('heading', { level: 1 });
  expect(headingElement).toBeInTheDocument();
  expect(headingElement.textContent).toBe('Elite Dangerous Pilots Network');
});
