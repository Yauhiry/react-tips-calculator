import { StylesConfig } from 'react-select';
import { TipsOption } from '../../types/types';

export const selectStyles: StylesConfig<TipsOption> = {
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    textAlign: 'center',
    color: isSelected ? '#ffffff' : '#756c6c',
    backgroundColor: isSelected
      ? '#2ED2C9'
      : isFocused
      ? '#2ED2C91A'
      : undefined,
    ':active': {
      backgroundColor: !isSelected ? '#2ED2C94D' : undefined,
    },
  }),
  control: (styles, { isFocused }) => ({
    ...styles,
    display: 'grid',
    gridTemplateColumns: `repeat(3, 1fr)`,
    paddingTop: 16,
    paddingBottom: 16,
    border: 'none',
    borderRadius: 30,
    overflow: 'hidden',
    boxShadow: isFocused ? `0 0 0 2px #2ED2C9` : undefined,
  }),
  valueContainer: (styles) => ({
    ...styles,
    gridColumn: `2 / 3`,
    justifySelf: 'center',
  }),
  singleValue: (styles) => ({
    ...styles,
    fontSize: 18,
    color: '#756c6c',
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    gridColumn: `3 / 4`,
    justifySelf: 'right',
    padding: '0px 24px',
  }),
  dropdownIndicator: (styles, { selectProps }) => ({
    ...styles,
    transform: selectProps.menuIsOpen ? 'rotate(180deg)' : undefined,
  }),
};
