import { render, screen } from '@testing-library/react';

import Form from './Form';

jest.mock('@/lib/commodity-list', () => ['mt_gold']);

test('renders the form', () => {
  setTimeout(() => {
    render(<Form />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  }, 2500);
});
