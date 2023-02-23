import Select, {
  SingleValue,
  components,
  DropdownIndicatorProps,
} from 'react-select';
import { TipsOption } from '../../types/types';
import { selectStyles } from './style';
import { ReactComponent as DropdownIcon } from '../../assets/image/dropdown-indicator-icon.svg';

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

  const DropdownIndicator = (
    props: DropdownIndicatorProps<TipsOption, false>
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <DropdownIcon />
      </components.DropdownIndicator>
    );
  };

  return (
    <Select
      options={options}
      value={value}
      styles={selectStyles}
      onChange={handleChange}
      isSearchable={false}
      isMulti={false}
      components={{ DropdownIndicator, IndicatorSeparator: null }}
    />
  );
};
