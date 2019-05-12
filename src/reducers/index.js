import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import { userReducer } from './userReducer';
import isLoadingReducer from './isLoadingReducer';
import errorMessageReducer from './errorMessageReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  isLoading: isLoadingReducer,
  errorMessage: errorMessageReducer
})

export default rootReducer;