import { OptionBase } from 'chakra-react-select';
import { exactThenFuzzySort } from './sort';

interface SelectItem extends OptionBase {
  label: string;
  value: string;
}

describe('exact then fuzzy sort', () => {
  it('should sort exact matches first then alphabetical', () => {
    let sortedOptions: SelectItem[] = [];

    const mockData = [
      { label: 'ddcrad', value: 'ddcrad' },
      { label: 'craccc', value: 'craccc' },
      { label: 'bbcrab', value: 'bbcrab' },
      { label: 'aaacra', value: 'aaacra' },
      { label: 'eeecra', value: 'eeecra' },
    ];

    exactThenFuzzySort('cra', mockData, (sortedMockData) => {
      sortedOptions = sortedMockData;
    });

    expect(sortedOptions[0].label).toEqual('craccc');
    expect(sortedOptions[1].label).toEqual('aaacra');
    expect(sortedOptions[2].label).toEqual('bbcrab');
    expect(sortedOptions[3].label).toEqual('ddcrad');
    expect(sortedOptions[4].label).toEqual('eeecra');
  });

  it('is case insensitive', () => {
    let sortedOptions: SelectItem[] = [];

    const mockData = [
      { label: 'DDCRAD', value: 'ddcrad' },
      { label: 'CRACC', value: 'craccc' },
      { label: 'BBCRAB', value: 'bbcrab' },
    ];

    exactThenFuzzySort('cra', mockData, (sortedMockData) => {
      sortedOptions = sortedMockData;
    });

    expect(sortedOptions[0].label).toEqual('CRACC');
    expect(sortedOptions[1].label).toEqual('BBCRAB');
    expect(sortedOptions[2].label).toEqual('DDCRAD');
  });
});
