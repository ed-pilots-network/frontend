import { OptionBase } from 'chakra-react-select';

interface SelectItem extends OptionBase {
  label: string;
  value: string;
}

const exactThenFuzzy = (
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

  exact.sort();
  fuzzy.sort();
  after(exact.concat(fuzzy));
};

export default exactThenFuzzy;
