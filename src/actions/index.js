export const addMovies = (movies) => ({
  type: "FETCH_MOVIES",
  movies
});

export const loginUser = (user) => ({
  type: "LOGIN_USER",
  user
});