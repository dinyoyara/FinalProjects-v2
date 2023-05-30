const setToken = (token: string): void => {
  localStorage.setItem("jwt", token);
};

export { setToken };
