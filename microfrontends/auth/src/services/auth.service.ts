const setToken = (token: string): void => {
  localStorage.setItem("jwt", token);
};

const signinAsync = (email: string, password: string): void => {
  setToken("no real token");
  console.log(email, password);
};

export { signinAsync };
