import { render } from '@testing-library/react';
import { useColorMode } from '@chakra-ui/react';
import LayoutClient from './layout.client';
import Navbar from './_components/navbar/Navbar';
import Footer from './_components/footer/Footer';

jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useColorMode: jest.fn(),
}));

jest.mock('./_components/navbar/Navbar', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue(<div>Mocked Navbar</div>),
}));

jest.mock('./_components/footer/Footer', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue(<div>Mocked Footer</div>),
}));

describe('LayoutClient', () => {
  beforeEach(() => {
    (useColorMode as jest.Mock).mockReturnValue({ colorMode: 'light' });
  });

  it('renders Navbar component', () => {
    render(<LayoutClient>Test content</LayoutClient>);
    expect(Navbar).toHaveBeenCalled();
  });

  it('renders Footer component', () => {
    render(<LayoutClient>Test content</LayoutClient>);
    expect(Footer).toHaveBeenCalled();
  });

  it('renders children content', () => {
    const { getByText } = render(<LayoutClient>Test content</LayoutClient>);
    const contentElement = getByText(/Test content/i);
    expect(contentElement).toBeInTheDocument();
  });
});
