import { useState, useEffect, FormEvent } from 'react';
import { StyledForm, Title, Subtitle, Total, InputGroup } from './styles';
import { SubmitButton } from '../Button/Button';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { Input } from '../Input/Input';
import { useInput } from '../../hooks/useInput';
import { TipsOption } from '../../types/types';

const tipsOptions: TipsOption[] = [
  { value: 10, label: '10%' },
  { value: 15, label: '15%' },
  { value: 20, label: '20%' },
];

export const Form = () => {
  const bill = useInput();
  const persons = useInput();

  const [selectedTips, setSelectedTips] = useState<TipsOption>(tipsOptions[0]);
  const [isDisabled, setDisabled] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (
      bill.value &&
      persons.value &&
      Number(bill.value) > 0 &&
      Number(persons.value) > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [bill.value, persons.value]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const totalTips =
      ((Number(bill.value) / 100) * selectedTips.value + Number(bill.value)) /
      Number(persons.value);
    setTotal(totalTips);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <InputGroup>
        <Input placeholder="Enter bill" type="number" {...bill} />
        <Input placeholder="Enter  persons" type="number" {...persons} />
        <CustomSelect
          options={tipsOptions}
          value={selectedTips}
          onChange={setSelectedTips}
        />
      </InputGroup>
      <Total>Total: {total.toFixed(2)}$</Total>
      <SubmitButton type="submit" disabled={isDisabled} />
    </StyledForm>
  );
};
