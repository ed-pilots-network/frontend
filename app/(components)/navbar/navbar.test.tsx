import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import Navbar from './Navbar';

test('navbar theme button changes classnames', async () => {
  // ARRANGE
  const component = <Navbar />;
  const container = document.body.appendChild(document.createElement('div'));
  act(() => createRoot(container).render(component));

  // ACT
  const nav = await screen.findByRole('navigation');
  const themeButton = await screen.findByRole('button');
  expect(nav).toHaveClass('dark');

  fireEvent.click(themeButton);

  // ASSERT
  expect(nav).not.toHaveClass('dark');
});
