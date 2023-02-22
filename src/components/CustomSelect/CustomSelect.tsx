import Select, { SingleValue } from 'react-select';
import { TipsOption } from '../../types/types';
import { selectStyles } from './style';

interface CustomSelectProps {
  options: TipsOption[];
  value: TipsOption;
  onChange: (option: TipsOption) => void;
}

export const CustomSelect = ({
  options,
  value,
  onChange,
}: CustomSelectProps) => {
  const handleChange = (option: SingleValue<TipsOption>): void => {
    if (option) onChange(option);
  };

  return (
    <Select
      options={options}
      value={value}
      styles={selectStyles}
      onChange={handleChange}
      isSearchable={false}
      isMulti={false}
    />
  );
};
