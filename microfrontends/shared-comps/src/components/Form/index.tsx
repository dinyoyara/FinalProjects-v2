import { FC } from "react";

import Button from "../Button";
import StyledForm from "./styles.css";
import { FormProps } from "../types";
import InputContainer from "../Input";
import SelectContainer from "../Select";
import { StyledTitle, StyledError } from "../styles.css";

const Form: FC<FormProps> = ({
  selectsInfo,
  inputsInfo,
  buttonsInfo,
  title,
  errors,
}) => {
  return (
    <StyledForm>
      <StyledTitle>{title}</StyledTitle>
      {errors.length > 0
        ? errors.map((error, i) => <StyledError key={i}>{error}</StyledError>)
        : null}
      {inputsInfo.map((input) => (
        <InputContainer
          key={input.id}
          type={input.type}
          value={input.value}
          id={input.id}
          label={input.label}
          placeholder={input.placeholder}
          width={input.width}
          height={input.height}
          onChange={input.onChange}
        />
      ))}
      {selectsInfo
        ? selectsInfo.map((select) => (
            <SelectContainer
              key={select.id}
              id={select.id}
              defaultValue={select.defaultValue}
              label={select.label}
              width={select.width}
              height={select.height}
              options={select.options}
              onChange={select.onChange}
            />
          ))
        : null}
      {buttonsInfo.map((b) => (
        <Button
          key={b.text}
          text={b.text}
          type={b.type}
          handleClick={b.handleClick}
          active={b.active}
        />
      ))}
    </StyledForm>
  );
};

export default Form;
