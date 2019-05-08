const moviesReducer =(state= [], action)=>{
  switch(action.type) {
    case 'FETCH_MOVIES':
    console.log('action',action)
      return [...state, ...action.movies];
    default: return state;
  }
}

export default moviesReducer;