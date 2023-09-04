import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import CommodityFormResponse from './CommodityFormResponseMobile';

const mockResponse = [
  {
    commodity: {
      commodityName: 'tritium',
      displayName: 'Tritium',
      type: 'CHEMICALS',
      isRare: false,
    },
    station: {
      marketId: 42069,
      name: 'Medium Station',
      arrivalDistance: 0,
      maxLandingPadSize: 'MEDIUM',
      fleetCarrier: true,
      requireOdyssey: false,
      planetary: false,
      marketUpdatedAt: '2023-08-01T00:47:01Z',
      system: {
        eliteId: 42069,
        name: 'Cool System',
        xcoordinate: 0,
        ycoordinate: 0,
        zcoordinate: 0,
      },
    },
    priceUpdatedAt: '2023-08-02T00:47:01Z',
    supply: 9199,
    demand: 1,
    buyPrice: 49906,
    sellPrice: 49184,
    distance: 0,
  },
  {
    commodity: {
      commodityName: 'tritium',
      displayName: 'Tritium',
      type: 'CHEMICALS',
      isRare: false,
    },
    station: {
      marketId: 42069,
      name: 'Small Station',
      arrivalDistance: 0,
      maxLandingPadSize: 'SMALL',
      fleetCarrier: true,
      requireOdyssey: false,
      planetary: false,
      marketUpdatedAt: '2023-08-01T00:47:01Z',
      system: {
        eliteId: 42069,
        name: 'Warm System',
        xcoordinate: 0,
        ycoordinate: 0,
        zcoordinate: 0,
      },
    },
    priceUpdatedAt: '2023-08-05T00:47:01Z',
    supply: 69420,
    demand: 1,
    buyPrice: 43238,
    sellPrice: 51234,
    distance: 0,
  },
  {
    commodity: {
      commodityName: 'tritium',
      displayName: 'Tritium',
      type: 'CHEMICALS',
      isRare: false,
    },
    station: {
      marketId: 42069,
      name: 'Large Station',
      arrivalDistance: 0,
      maxLandingPadSize: 'LARGE',
      fleetCarrier: true,
      requireOdyssey: false,
      planetary: false,
      marketUpdatedAt: '2023-08-01T00:47:01Z',
      system: {
        eliteId: 42069,
        name: 'Warm System',
        xcoordinate: 0,
        ycoordinate: 0,
        zcoordinate: 0,
      },
    },
    priceUpdatedAt: '2023-08-11T00:47:01Z',
    supply: 112470,
    demand: 1,
    buyPrice: 42869,
    sellPrice: 50192,
    distance: 0,
  },
];

describe('Commodity Form Response', () => {
  beforeEach(() => {
    const Component = () => (
      <CommodityFormResponse commodityResponse={mockResponse} isBuying={true} />
    );

    render(<Component />);
  });

  afterEach(() => cleanup());

  it('renders', () => {
    const headings = screen.getAllByRole('heading');

    expect(headings[0]).toHaveTextContent('Commodity: Tritium');
  });

  it('results can be sorted by price', () => {
    // ARRANGE
    const lowPrice = '49,184';
    const highPrice = '51,234';
    const firstRow = screen.getAllByRole('row')[0];
    let firstRowPrice = firstRow.firstChild?.textContent;
    const sortButton = screen.getByRole('button', { name: 'Price' });

    // ACT
    fireEvent.click(sortButton);

    // ASSERT
    expect(firstRowPrice).toEqual(lowPrice);

    // ACT
    fireEvent.click(sortButton);

    // ASSERT
    firstRowPrice = firstRow.firstChild?.textContent;
    expect(firstRowPrice).toEqual(highPrice);
  });

  it('each row can be clicked on to show details', () => {
    // ARRANGE
    const firstRow = screen.getAllByRole('row')[0];
    const firstRowHiddedDetails = firstRow.nextSibling;

    // ASSERT
    expect(firstRowHiddedDetails).not.toBeInTheDocument();

    // ACT
    fireEvent.click(firstRow);

    // ASSERT
    expect(firstRowHiddedDetails).firstChild?.toHaveTextContent(
      'Station Name: Small Station',
    );
  });
});
