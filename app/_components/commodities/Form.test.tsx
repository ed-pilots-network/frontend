import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';

const mockData = {
  commodityId: 'gold',
  system: 'sol',
  includePlanetary: true,
  includeOdyssey: true,
  includeFleetCarriers: false,
  smallLandingPad: false,
  mediumLandingPad: true,
  largeLandingPad: false,
  minSupply: 5000,
};

jest.mock('@/lib/commodity-list', () => ['mt_gold']);
jest.mock('../inputs/Commodities', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValue(<input value="gold" onChange={(e) => e.target.value} />),
}));

const mockSubmit = jest.fn();

describe('Form', () => {
  beforeEach(() => {
    render(<Form onSubmitHandler={mockSubmit} isLoading={false} />);
  });

  test('renders the form', () => {
    // ARRANGE input values
    let textboxes: HTMLInputElement[] = screen.getAllByRole('textbox');
    let commodityInput = textboxes[0];
    let systemInput = textboxes[1];
    commodityInput.value = mockData.commodityId;
    systemInput.value = mockData.system;

    let checkboxes: HTMLInputElement[] = screen.getAllByRole('checkbox');
    let includePlanetaryInput = checkboxes[0];
    let includeOdyssey = checkboxes[1];
    let includeFleetCarriers = checkboxes[2];
    includePlanetaryInput.checked = mockData.includePlanetary;
    includeOdyssey.checked = mockData.includeOdyssey;
    includeFleetCarriers.checked = mockData.includeFleetCarriers;

    const radioButtons: HTMLInputElement[] = screen.getAllByRole('radio');
    let smallLandingPad = radioButtons[0];
    let mediumLandingPad = radioButtons[1];
    let largeLandingPad = radioButtons[2];
    smallLandingPad.checked = mockData.smallLandingPad;
    mediumLandingPad.checked = mockData.mediumLandingPad;
    largeLandingPad.checked = mockData.largeLandingPad;

    const minSupplyInput: HTMLInputElement = screen.getByRole('spinbutton');
    minSupplyInput.value = mockData.minSupply.toString();

    // ASSERT values are displayed correctly
    expect(commodityInput).toHaveValue(mockData.commodityId);
    expect(systemInput).toHaveValue(mockData.system);
    expect(includePlanetaryInput).toBeChecked();
    expect(includeOdyssey).toBeChecked();
    expect(includeFleetCarriers).not.toBeChecked();
    expect(smallLandingPad).not.toBeChecked();
    expect(mediumLandingPad).toBeChecked();
    expect(largeLandingPad).not.toBeChecked();
    expect(minSupplyInput).toHaveValue(mockData.minSupply.toString());
  });

  test('user can change checkbox values', () => {
    // ARRANGE checkbox values
    let checkboxes: HTMLInputElement[] = screen.getAllByRole('checkbox');
    let includePlanetary = checkboxes[0];
    let includeOdyssey = checkboxes[1];
    let includeFleetCarriers = checkboxes[2];

    // ACT change checkbox values
    fireEvent.change(includePlanetary, { target: { checked: false } });
    fireEvent.change(includeOdyssey, { target: { checked: false } });
    fireEvent.change(includeFleetCarriers, { target: { checked: true } });

    // ASSERT checkbox values are changed
    expect(includePlanetary).not.toBeChecked();
    expect(includeOdyssey).not.toBeChecked();
    expect(includeFleetCarriers).toBeChecked();
  });

  test('user can change radio buttons', () => {
    // ARRANGE radio button values
    const radioButtons: HTMLInputElement[] = screen.getAllByRole('radio');
    let smallLandingPad = radioButtons[0];
    let mediumLandingPad = radioButtons[1];
    let largeLandingPad = radioButtons[2];

    // ACT change radio button values
    fireEvent.change(smallLandingPad, { target: { checked: true } });

    // ASSERT radio button values are changed
    expect(smallLandingPad).toBeChecked();
    expect(mediumLandingPad).not.toBeChecked();
    expect(largeLandingPad).not.toBeChecked();
  });

  test('user can text inputs', () => {
    // ARRANGE inputs
    const systemInput: HTMLInputElement =
      screen.getByLabelText('Near Star System');

    // ACT change input values
    fireEvent.change(systemInput, { target: { value: 'new system' } });

    // ASSERT input values are changed
    expect(systemInput).toHaveValue('new system');
  });
});
