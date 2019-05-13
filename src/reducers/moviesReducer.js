const moviesReducer = (state= [], action)=>{
  switch(action.type) {
    case 'FETCH_MOVIES':
      return [...state, ...action.movies];
    case 'TOGGLE_FAVORITE':
      let newState = [...state].map(movie => {
        if (movie.id === action.id) {
          movie.isFavorite = !movie.isFavorite
        }
        return movie
      })
      return newState
    default: return state;
  }
}

export default moviesReducer;