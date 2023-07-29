import { render, screen, waitFor } from '@testing-library/react';
import PageClient from './page.client';

const mockPostData = [
  {
    id: 1,
    title: 'json-server',
    author: 'typicode',
  },
];

const mockCommodity = {
  commodityName: 'wine',
  displayName: 'Wine',
  type: 'LEGAL_DRUGS',
  isRare: false,
};

const mockClientCommodity = {
  commodityName: 'beer',
  displayName: 'Beer',
  type: 'LEGAL_DRUGS',
  isRare: false,
};

beforeEach(() => {
  fetchMock.resetMocks();
});

test('fetches and displays the post & commodity data from server & client side calls', async () => {
  fetchMock.mockResponseOnce(JSON.stringify(mockClientCommodity));
  render(<PageClient posts={mockPostData} commodity={mockCommodity} />);

  // Check if server returned post data is being rendered
  const postTitleElement = screen.getByText('Post Title: json-server');
  const authorElement = screen.getByText('Author: typicode');
  expect(postTitleElement).toBeInTheDocument();
  expect(authorElement).toBeInTheDocument();

  // Check if server returned commodity data is being rendered
  const commodityElement = screen.getByText('Commodity Name: wine');
  expect(commodityElement).toBeInTheDocument();

  // Check for client returned commodity data is being rendered
  expect(fetchMock).toHaveBeenCalledWith('/api/v1/trade/commodity/Beer', {
    next: { revalidate: 1 },
  });

  await waitFor(() =>
    expect(screen.getByText('Commodity Name: beer')).toBeInTheDocument(),
  );
});

test('displays an error message when the fetch request fails', async () => {
  const errorMessage =
    'Failed to fetch commodity data from staging server on client side';

  fetchMock.mockRejectOnce(new Error(errorMessage));

  render(<PageClient posts={mockPostData} commodity={mockCommodity} />);

  await waitFor(() =>
    expect(screen.getByText(errorMessage)).toBeInTheDocument(),
  );

  expect(fetchMock).toHaveBeenCalledTimes(1);
});
