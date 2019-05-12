const moviesReducer = (state= [], action)=>{
  switch(action.type) {
    case 'FETCH_MOVIES':
      return [...state, ...action.movies];
    default: return state;
  }
}

export default moviesReducer;