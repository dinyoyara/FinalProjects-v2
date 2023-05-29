import { FC } from "react";

import StyledInput from "./styles.css";
import { StyledFieldContainer } from "../styles.css";
import { InputProps } from "../types";

const InputContainer: FC<InputProps> = ({
  type,
  id,
  placeholder,
  label,
  value,
  onChange,
}) => {
  return (
    <StyledFieldContainer>
      <label htmlFor={id}>{label}</label>
      <StyledInput
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </StyledFieldContainer>
  );
};

export default InputContainer;
