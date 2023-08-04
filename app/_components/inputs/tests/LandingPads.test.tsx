import { fireEvent, render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import LandingPad, { radioValues } from '../LandingPads';
import { CommodityForm } from '../../commodities/types';

describe('Landing Pad Field', () => {
  beforeEach(() => {
    const Component = () => {
      const { register } = useForm<CommodityForm>();

      return <LandingPad register={register('maxLandingPadSize')} />;
    };

    render(<Component />);
  });

  it('renders the 3 radios and they work', () => {
    expect(screen.getAllByRole('radio').length).toEqual(3);

    radioValues.forEach((radio) => {
      let el = screen.getByLabelText(radio.name);
      expect(el).toBeInTheDocument();
      expect(el).not.toBeChecked();
      fireEvent.click(el);
      expect(el).toBeChecked();
    });
  });
});
