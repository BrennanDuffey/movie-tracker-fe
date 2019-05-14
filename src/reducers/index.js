import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import currMovieReducer from './currMovieReducer';
import { userReducer } from './userReducer';
import isLoadingReducer from './isLoadingReducer';
import errorMessageReducer from './errorMessageReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  currMovie: currMovieReducer,
  user: userReducer,
  isLoading: isLoadingReducer,
  errorMessage: errorMessageReducer
})

export default rootReducer;