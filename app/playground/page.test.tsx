import { render, screen } from '@testing-library/react';
import PageClient from './page.client';

test('renders the heading with correct text', () => {
  const mockPostData = [
    {
      id: 1,
      title: 'json-server',
      author: 'typicode',
    },
  ];

  render(<PageClient posts={mockPostData} />);
  const headingElement = screen.getByRole('heading', { level: 1 });
  const postTitleElement = screen.getByText('Post Title: json-server');
  const authorElement = screen.getByText('Author: typicode');
  expect(headingElement).toBeInTheDocument();
  expect(headingElement.textContent).toBe('Playground');
  expect(postTitleElement).toBeInTheDocument();
  expect(authorElement).toBeInTheDocument();
});
