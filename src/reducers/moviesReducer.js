const moviesReducer = (state= [], action)=>{
  switch(action.type) {
    case 'FETCH_MOVIES':
      return action.movies;
    case 'TOGGLE_FAVORITE':
      let newState = [...state].map(movie => {
        if (movie.id === action.id) {
          movie.isFavorite = !movie.isFavorite
        }
        return movie
      })
      return newState
    case 'SET_FAVORITES':
      let stateWithFavorites = [...state].map(movie => {
        action.favorites.forEach(favorite => {
          if (favorite.movie_id === movie.id) {
            movie.isFavorite = !movie.isFavorite
          }
        });
        return movie
      });
      return stateWithFavorites
    default: 
      return state;
  }
}

export default moviesReducer;