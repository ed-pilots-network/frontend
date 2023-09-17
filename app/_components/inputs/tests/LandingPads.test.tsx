import { fireEvent, render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import LandingPad, { radioValues } from '../LandingPads';
import { StationForm } from '@/app/_types/station';

describe('Landing Pad Field', () => {
  beforeEach(() => {
    const Component = () => {
      const { register } = useForm<StationForm>();

      return <LandingPad register={register('landingPadSize')} />;
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
