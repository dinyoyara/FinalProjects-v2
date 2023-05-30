import { useMutation } from "@apollo/client";
import { Dispatch, FC, SetStateAction, useState, useEffect } from "react";

import Form from "app-shared/Form";
import { isEmailValid } from "../helpers";
import { EMPTY_STRING } from "../../constants";
import { SINGUP_MUTATION } from "../../graphql/mutations";
import { StyledAuthForm, StyledError } from "../styles.css";

interface Props {
  goToLogin: Dispatch<SetStateAction<boolean>>;
}

const RegisterForm: FC<Props> = ({ goToLogin }) => {
  const [name, setName] = useState(EMPTY_STRING);
  const [email, setEmail] = useState(EMPTY_STRING);
  const [password, setPassword] = useState(EMPTY_STRING);

  const [formIsValid, setFormIsValid] = useState(false);
  const [fieldsErrors, setFieldsErrors] = useState({
    email: EMPTY_STRING,
    password: EMPTY_STRING,
    name: EMPTY_STRING,
  });
  const [signUpError, setSignUpError] = useState(EMPTY_STRING);

  const [singup] = useMutation(SINGUP_MUTATION, {
    variables: { input: { name, email, password } },
  });

  useEffect(() => {
    checkFormIsValid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, email, password]);

  const validateField = (fieldName: string, value: string) => {
    const currentErrors = { ...fieldsErrors };
    currentErrors[fieldName as keyof typeof currentErrors] = EMPTY_STRING;
    switch (fieldName) {
      case "name":
        if (value.length < 2)
          currentErrors[fieldName] = `name should be more that 1 symbols`;
        break;
      case "email":
        if (!isEmailValid(value))
          currentErrors[fieldName] = `invalid email address`;
        break;
      case "password":
        if (value.length < 5)
          currentErrors[fieldName] = `password should be more that 5 symbols`;
        break;
      default:
        break;
    }
    setFieldsErrors(currentErrors);
  };

  const checkFormIsValid = () => {
    const validValues =
      fieldsErrors.email === EMPTY_STRING &&
      fieldsErrors.password === EMPTY_STRING &&
      fieldsErrors.name === EMPTY_STRING;
    const notEmptyValues =
      email !== EMPTY_STRING &&
      password !== EMPTY_STRING &&
      name !== EMPTY_STRING;
    setFormIsValid(validValues && notEmptyValues);
  };

  const submitHandler = async () => {
    const result = await singup();
    console.log(result);
    goToLogin(true);
  };

  const handleOnChange = (
    event: Event,
    setter: React.Dispatch<React.SetStateAction<string>>,
    fieldName: string
  ) => {
    const value = (event.target as HTMLInputElement).value;
    setter(value);
    setSignUpError(EMPTY_STRING);
    validateField(fieldName, value);
  };

  // SET FORM ELEMENTS
  const getFormInputs = () => {
    return [
      {
        id: "name",
        type: "text",
        value: name,
        label: "Name:",
        placeholder: "Enter your name here",
        height: "40px",
        onChange: (e: Event) => handleOnChange(e, setName, "name"),
      },
      {
        id: "email",
        type: "text",
        value: email,
        label: "Email:",
        placeholder: "Enter your email here",
        height: "40px",
        onChange: (e: Event) => handleOnChange(e, setEmail, "email"),
      },
      {
        id: "password",
        type: "password",
        value: password,
        label: "Password:",
        placeholder: "Enter your password here",
        height: "40px",
        onChange: (e: Event) => handleOnChange(e, setPassword, "password"),
      },
    ];
  };

  const getFormButtons = () => {
    return [
      {
        text: "Sing in",
        type: "button",
        active: formIsValid,
        handleClick: submitHandler,
      },
    ];
  };

  return (
    <StyledAuthForm>
      <Form
        inputsInfo={getFormInputs()}
        buttonsInfo={getFormButtons()}
        title="Sing up"
        errors={signUpError}
      />
      {fieldsErrors.name ? (
        <StyledError>{fieldsErrors.name}</StyledError>
      ) : null}
      {fieldsErrors.email ? (
        <StyledError>{fieldsErrors.email}</StyledError>
      ) : null}
      {fieldsErrors.password ? (
        <StyledError>{fieldsErrors.password}</StyledError>
      ) : null}
    </StyledAuthForm>
  );
};

export default RegisterForm;
