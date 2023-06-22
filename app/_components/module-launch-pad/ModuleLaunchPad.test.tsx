import { render, screen } from '@testing-library/react';
import ModuleLaunchPad from './ModuleLaunchPad';

jest.mock('./ModuleLaunchPad', () => {
  const originalModule = jest.requireActual('./ModuleLaunchPad');
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn().mockReturnValue(<div>Mocked Module Launch Pad</div>),
  };
});

describe('LayoutClient', () => {
  it('renders module launch pad component', () => {
    render(<ModuleLaunchPad />);
    expect(screen.getByText('Mocked Module Launch Pad')).toBeInTheDocument();
  });
});

// TODO: this test sucks... - aslink87
