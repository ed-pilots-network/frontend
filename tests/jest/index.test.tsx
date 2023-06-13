import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import Home from '@/app/page';

test('renders Layout page', async () => {
  // ARRANGE
  const component = <Home />;
  const container = document.body.appendChild(document.createElement('div'));
  act(() => createRoot(container).render(component));

  // ACT
  await screen.findByRole('main');

  // ASSERT
  expect(screen.getByRole('main')).toBeInTheDocument();
});
