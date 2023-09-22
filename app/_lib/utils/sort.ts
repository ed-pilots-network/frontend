import { OptionBase } from 'chakra-react-select';

interface SelectItem extends OptionBase {
  label: string;
  value: string;
}

export const alphabeticalSort = (a: SelectItem, b: SelectItem) => {
  if (a.label < b.label) {
    return -1;
  }
  if (a.label > b.label) {
    return 1;
  }
  return 0;
};

export const exactThenFuzzySort = (
  input: string,
  options: SelectItem[],
  after: (sortedOptions: SelectItem[]) => void,
) => {
  const exact = [];
  const fuzzy = [];
  const check = (input === '' ? 'a' : input).toLowerCase();

  for (let i = 0; i < options.length; i += 1) {
    if (options[i].label.toLowerCase().indexOf(check) === 0) {
      exact.push(options[i]);
    } else {
      fuzzy.push(options[i]);
    }
  }

  exact.sort(alphabeticalSort);
  fuzzy.sort(alphabeticalSort);
  after(exact.concat(fuzzy));
};
