import { fireEvent, render, screen } from '@testing-library/react';
import ModuleProps, { Tags } from '@/app/_lib/moduleProps';
import NavDrawer from './NavDrawer';

describe('Nav Drawer', () => {
  beforeEach(() => {
    render(<NavDrawer />);
  });

  it('renders closed', () => {
    Tags.forEach((header) => {
      let el = screen.queryByText(header);
      expect(el).toBeNull();
    });
  });

  it('opens the menu on click and displays items', () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);

    Tags.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();

      ModuleProps.filter((item) => item.tag === header).forEach((module) => {
        expect(screen.getByText(module.title)).toBeInTheDocument();
      });
    });
  });
});
