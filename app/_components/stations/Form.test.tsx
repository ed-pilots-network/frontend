import { render, screen } from '@testing-library/react';
import Form from './Form';

jest.mock('../inputs/Powers', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValue(
      <input value="some value" onChange={(e) => e.target.value} />,
    ),
}));
jest.mock('../inputs/Allegiances', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValue(
      <input value="some value" onChange={(e) => e.target.value} />,
    ),
}));
jest.mock('../inputs/Governments', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValue(
      <input value="some value" onChange={(e) => e.target.value} />,
    ),
}));
jest.mock('../inputs/PowerEffects', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValue(
      <input value="some value" onChange={(e) => e.target.value} />,
    ),
}));
jest.mock('../inputs/FactionStates', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValue(
      <input value="some value" onChange={(e) => e.target.value} />,
    ),
}));
jest.mock('../inputs/Economies', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValue(
      <input value="some value" onChange={(e) => e.target.value} />,
    ),
}));
jest.mock('../inputs/LandingPads', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValue(
      <input value="some value" onChange={(e) => e.target.value} />,
    ),
}));
jest.mock('../inputs/StationTypes', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValue(
      <input value="some value" onChange={(e) => e.target.value} />,
    ),
}));
jest.mock('../inputs/Ships', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValue(
      <input value="some value" onChange={(e) => e.target.value} />,
    ),
}));
jest.mock('../inputs/Modules', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValue(
      <input value="some value" onChange={(e) => e.target.value} />,
    ),
}));
jest.mock('../inputs/Commodities', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValue(
      <input value="some value" onChange={(e) => e.target.value} />,
    ),
}));
jest.mock('../inputs/Facilities', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValue(
      <input value="some value" onChange={(e) => e.target.value} />,
    ),
}));

describe('Stations Form', () => {
  it('should render the basic fields', () => {
    render(<Form onSubmitHandler={() => {}} isLoading={false} />);

    expect(
      screen.getByRole('textbox', { name: 'Station' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('textbox', { name: 'Nearest System' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /Find Stations/i }),
    ).toBeInTheDocument();
  });
});
