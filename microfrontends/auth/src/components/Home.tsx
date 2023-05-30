import { FC, useState } from "react";

import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import { StyledGreeting, StyledLink } from "./styles.css";
import { AppProps } from "../type";

const Home: FC<AppProps> = ({ customer }) => {
  const [showLogin, setShowLogin] = useState(true);

  const changeActiveForm = () => {
    setShowLogin((prev) => !prev);
  };

  const form = showLogin ? (
    <LoginForm />
  ) : (
    <RegisterForm goToLogin={setShowLogin} />
  );
  return (
    <>
      {customer ? (
        <StyledGreeting>Welcome, {customer.name}</StyledGreeting>
      ) : (
        <>
          {form}
          <StyledLink onClick={changeActiveForm}>
            {showLogin ? "sign up" : "sign in"}
          </StyledLink>
        </>
      )}
    </>
  );
};

export default Home;
