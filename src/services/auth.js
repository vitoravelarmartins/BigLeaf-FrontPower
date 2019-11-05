export const TOKEN_KEY = "@money-web-app-Token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => JSON.parse(localStorage.getItem(TOKEN_KEY));

export const getLoggedUser = () => {

  console.log(JSON.stringify(getToken()))
  const { user } = getToken()

  return user;
}

export const login = token => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
