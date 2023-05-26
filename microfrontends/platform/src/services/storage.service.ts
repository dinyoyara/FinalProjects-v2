const getToken = (): string | null => {
  return localStorage.getItem("jwt");
};

const removeToken = (): void => {
  localStorage.removeItem("jwt");
};

const setToken = (token: string): void => {
  localStorage.setItem("jwt", token);
};

export { getToken, removeToken, setToken };
