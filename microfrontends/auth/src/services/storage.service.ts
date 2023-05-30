const setToken = (token: string): void => {
  localStorage.setItem("jwt", token);
};

const getToken = (): string | null => {
  return localStorage.getItem("jwt");
};

export { setToken, getToken };
