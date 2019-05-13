export const addMovies = (movies) => ({
  type: "FETCH_MOVIES",
  movies
});

export const loginUser = (user) => ({
  type: "LOGIN_USER",
  user
});

export const signoutUser =(user)=>({
  type: "SIGNOUT_USER",
  user
});