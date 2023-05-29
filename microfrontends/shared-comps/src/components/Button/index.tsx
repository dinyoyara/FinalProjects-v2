import { FC } from "react";

import StyledButton from "./styles.css";
import { ButtonProps } from "../types";

const Button: FC<ButtonProps> = ({ text, type, handleClick, active }) => {
  return (
    <StyledButton type={type} onClick={handleClick} disabled={!active}>
      {text}
    </StyledButton>
  );
};

export default Button;
