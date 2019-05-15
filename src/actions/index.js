export const addMovies = (movies) => ({
  type: "FETCH_MOVIES",
  movies
});

export const grabCurrMovie = (movie) => ({
  type: "GRAB_MOVIE",
  movie
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
        
export const loginUser = (user) => ({
  type: "LOGIN_USER",
  user
});
        
export const signoutUser =()=>({
  type: "SIGNOUT_USER"
});

export const setFavorites = (favorites) => ({
  type: "SET_FAVORITES",
  favorites
});