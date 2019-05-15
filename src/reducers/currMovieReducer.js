const currMovieReducer = (state = {}, action)=>{
  switch(action.type) {
    case 'GRAB_MOVIE':
      return {...action.movie};
    default: 
      return state;
  }
}

export default currMovieReducer;