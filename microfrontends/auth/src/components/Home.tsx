import { useState } from "react";

import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import { getToken } from "../services/storage.service";
import { StyledGreeting, StyledLink } from "./styles.css";

const Home = () => {
  const [customer] = useState(getToken());
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
        <StyledGreeting>Welcome, Customer</StyledGreeting>
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
