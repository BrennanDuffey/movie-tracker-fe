export const addMovies = (movies) => ({
  type: "FETCH_MOVIES",
  movies
});

export const loginUser = (user) => ({
  type: "LOGIN_USER",
  user
});

export const isLoading = (bool) => ({
  type: "IS_LOADING",
  isLoading: bool
});

export const errorMessage = (errorMessage) => ({
  type: "SET_ERROR_MESSAGE",
  errorMessage
});

export const signoutUser =(user)=>({
  type: "SIGNOUT_USER",
  user
});