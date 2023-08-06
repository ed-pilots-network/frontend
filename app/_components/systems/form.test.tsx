import { render, screen } from '@testing-library/react';
import Form from './Form';

/* const mockData = {
  system: 'Sol',
  onlyPopulated: '1',
  allegiance: 'Empire',
  government: 'Corporate',
  economy: 'Industrial',
  minorFaction: 'Pilots Federation',
  stationFilter: 'hasStations',
  powers: 'Edmund Mahon',
  powerEffects: 'Control',
  securities: 'Low',
  factionStates: 'Boom',
}; */

it('should render the basic fields', () => {
  render(<Form onSubmitHandler={() => {}} isLoading={false} />);

  expect(screen.getByRole('textbox', { name: 'System' })).toBeInTheDocument();

  expect(
    screen.getByRole('textbox', { name: 'Minor Faction' }),
  ).toBeInTheDocument();

  expect(
    screen.getByRole('button', { name: /Find Systems/i }),
  ).toBeInTheDocument();
});
