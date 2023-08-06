import { render, screen, fireEvent } from '@testing-library/react';
import ModuleProps, { Tags } from '@/app/_lib/moduleProps';
import Navbar from './Navbar';

describe('Nav Bar', () => {
  beforeEach(() => {
    process.env = Object.assign(process.env, {
      NEXT_PUBLIC_STAGE: 'test-stage',
    });
    render(<Navbar />);
  });

  test('renders the navbar with logo and toggle switch', () => {
    // Mock env variable
    process.env = Object.assign(process.env, {
      NEXT_PUBLIC_STAGE: 'test-stage',
    });
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

  it('renders top level menu items', () => {
    Tags.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  it('renders the submenus closed', () => {
    Tags.forEach((item) => {
      let el = screen.getByText(item);
      expect(el).toHaveAttribute('aria-expanded', 'false');
    });
  });

  it('opens a submenu on click', () => {
    Tags.forEach((header) => {
      let el = screen.getByText(header);
      expect(el).toHaveAttribute('aria-expanded', 'false');
      fireEvent.click(el);
      expect(el).toHaveAttribute('aria-expanded', 'true');

      ModuleProps.filter((item) => item.tag === header).forEach((module) => {
        expect(screen.getByText(module.title)).toBeInTheDocument();
      });
    });
  });
});
