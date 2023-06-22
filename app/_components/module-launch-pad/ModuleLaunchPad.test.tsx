import { render, screen } from '@testing-library/react';
import ModuleLaunchPad from './ModuleLaunchPad';

test('renders the module links', () => {
  render(<ModuleLaunchPad />);
  expect(screen.getByText('Systems')).toBeInTheDocument();
  expect(screen.getByText('Bodies')).toBeInTheDocument();
  expect(screen.getByText('Stations')).toBeInTheDocument();
  expect(screen.getByText('Attractions')).toBeInTheDocument();
  expect(screen.getByText('POIs')).toBeInTheDocument();
  expect(screen.getByText('Factions')).toBeInTheDocument();
  expect(screen.getByText('Shipyard')).toBeInTheDocument();
  expect(screen.getByText('Single Trade Route')).toBeInTheDocument();
  expect(screen.getByText('Multi-Hop Trade Route')).toBeInTheDocument();
  expect(screen.getByText('Loop Trade Route')).toBeInTheDocument();
});
