import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

type RadioType = {
  label: string;
  values: string[];
};

type InputType = {
  label: string;
  placeholder: string;
};

interface FormProps {
  radio1?: RadioType;
  input1?: InputType;
}

const Form: React.FC<FormProps> = ({
  radio1 = { label: 'radio', values: [] },
  input1 = { label: 'textarea', placeholder: '' },
}) => {
  const [radioSelected, setRadioSelected] = useState('');
  const [inputValue, setInputValue] = useState('');

  // TODO: format the system search string to all lowercase and replace spaces with underscores

  return (
    <Flex justifyContent="space-between" alignItems="center" paddingY="3">
      <FormControl>
        {radio1 && (
          <>
            <RadioGroup
              onChange={setRadioSelected}
              value={radioSelected}
              aria-label={radio1.label.toLocaleLowerCase()}
            >
              <Stack direction="row">
                {radio1.values?.map((value, index) => (
                  <Radio value={value} key={index}>
                    {value}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </>
        )}
        {input1 && (
          <>
            <FormLabel>{input1.label}</FormLabel>
            <Input
              variant="filled"
              placeholder={input1.placeholder}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              aria-label={input1.label.toLocaleLowerCase()}
            />
          </>
        )}
      </FormControl>
    </Flex>
  );
};

export default Form;
