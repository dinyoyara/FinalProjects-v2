import { FC } from "react";

import StyledSelect from "./styles.css";
import { StyledFieldContainer } from "../styles.css";
import { SelectProps } from "../types";

const SelectContainer: FC<SelectProps> = ({
  id,
  defaultValue,
  onChange,
  label,
  options,
}) => {
  return (
    <StyledFieldContainer>
      <label htmlFor={id}>{label}</label>
      <StyledSelect id={id} value={defaultValue} onChange={onChange}>
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </StyledSelect>
    </StyledFieldContainer>
  );
};

export default SelectContainer;
