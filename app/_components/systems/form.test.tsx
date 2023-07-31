import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';

const mockData = {
  system: 'Sol',
  onlyPopulated: '1',
  allegiance: 'Empire',
  government: 'Corporate',
  economy: 'Industrial',
  minorFaction: 'Pilots Federation',
  stationFilter: 'hasStations',
  powers: 'Edmund Mahon',
  powerEffects: 'Control',
  referenceSystem: 'Sol',
  securities: 'Low',
  factionStates: 'Boom',
};

it('should render the basic fields', () => {
  render(<Form onSubmitHandler={() => {}} isLoading={false} />);

  /* expect(
    screen.getByRole('heading', { name: 'New recipe' }),
  ).toBeInTheDocument();

  expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
  expect(
    screen.getByRole('textbox', { name: /description/i }),
  ).toBeInTheDocument();

  expect(
    screen.getByRole('spinbutton', { name: /servings/i }),
  ).toBeInTheDocument();

  expect(
    screen.getByRole('button', { name: /add ingredient/i }),
  ).toBeInTheDocument();

  expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument(); */
});

/* jest.mock('@/lib/commodity-list', () => ['mt_gold']);
jest.mock('../inputs/commodities/commodities', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValue(<input value="gold" onChange={(e) => e.target.value} />),
}));

const mockSubmit = jest.fn();

describe('Form', () => {
  beforeEach(() => {
    render(<Form onSubmitHandler={mockSubmit} isLoading={false} />);
  });

  test('renders the form', () => {
    // ARRANGE input values
    let textboxes: HTMLInputElement[] = screen.getAllByRole('textbox');
    let systemInput = textboxes[0];
    let factionInput = textboxes[1];
    let referenceSystemInput = textboxes[2];

    systemInput.value = mockData.system;
    factionInput.value = mockData.minorFaction;
    referenceSystemInput.value = mockData.referenceSystem;

    // ASSERT values are displayed correctly
    expect(systemInput).toHaveValue(mockData.system);
    expect(factionInput).toHaveValue(mockData.minorFaction);
    expect(factionInput).toHaveValue(mockData.referenceSystem);
  });

  test('user can text inputs', () => {
    // ARRANGE inputs
    const systemInput: HTMLInputElement =
      screen.getByLabelText('Minor Faction');

    // ACT change input values
    fireEvent.change(systemInput, { target: { value: 'new faction' } });

    // ASSERT input values are changed
    expect(systemInput).toHaveValue('new faction');
  });
}); */
