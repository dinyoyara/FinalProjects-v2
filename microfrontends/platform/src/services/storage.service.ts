const getToken = (): string | null => {
  return localStorage.getItem("jwt");
};

const removeToken = (): void => {
  localStorage.removeItem("jwt");
};

export { getToken, removeToken };
