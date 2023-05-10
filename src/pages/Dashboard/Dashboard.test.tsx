import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard Page Test', () => {
  it('has default text', () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText('Dashboard')).toBeInTheDocument();
  });
});
