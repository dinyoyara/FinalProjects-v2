import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";

import { SIGNIN_MUTATION } from "../../graphql/singin.mutation";
import Form from "app-shared/Form";
import { isEmailValid } from "../helpers";
import { StyledAuthForm, StyledError } from "../styles.css";
import { setToken } from "../../services/storage.service";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formIsValid, setFormIsValid] = useState(false);
  const [fieldsErrors, setFieldsErrors] = useState({
    email: "",
    password: "",
  });
  const [signInError, setSignInError] = useState("");

  const [singin] = useMutation(SIGNIN_MUTATION, {
    variables: { input: { email, password } },
  });

  useEffect(() => {
    checkFormIsValid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  const validateField = (fieldName: string, value: string) => {
    const currentErrors = { ...fieldsErrors };
    currentErrors[fieldName as keyof typeof currentErrors] = "";
    switch (fieldName) {
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
      fieldsErrors.email === "" && fieldsErrors.password === "";
    const notEmptyValues = email !== "" && password !== "";
    setFormIsValid(validValues && notEmptyValues);
  };

  const submitHandler = async () => {
    const result = await singin();
    setToken(result.data.singin.token);
  };

  const handleOnChange = (
    event: Event,
    setter: React.Dispatch<React.SetStateAction<string>>,
    fieldName: string
  ) => {
    const value = (event.target as HTMLInputElement).value;
    setter(value);
    setSignInError("");
    validateField(fieldName, value);
  };

  // SET FORM ELEMENTS
  const getFormInputs = () => {
    return [
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
        title="Sing in"
        errors={signInError}
      />
      {fieldsErrors.email ? (
        <StyledError>{fieldsErrors.email}</StyledError>
      ) : null}
      {fieldsErrors.password ? (
        <StyledError>{fieldsErrors.password}</StyledError>
      ) : null}
    </StyledAuthForm>
  );
};

export default LoginForm;
