export const addMovies = (movies) => ({
  type: "FETCH_MOVIES",
  movies
});

export const loginUser = (user) => ({
  type: "LOGIN_USER",
  user
});

export const isLoading = (isLoading) => ({
  type: "IS_LOADING",
  isLoading
});

export const errorMessage = (errorMessage) => ({
  type: "SET_ERROR_MESSAGE",
  errorMessage
});

export const toggleFavorite = (id) => ({
  type: "TOGGLE_FAVORITE",
  id
}); 

export const signoutUser =(user)=>({
  type: "SIGNOUT_USER",
  user
});