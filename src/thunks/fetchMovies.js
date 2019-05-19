import { fetchMovies } from '../utils/apiCalls/apiCalls'
import { cleanFetchMovies } from '../utils/cleaners/cleanMovies'
import { isLoading, addMovies, errorMessage } from '../actions'

export const thunkFetchMovies = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const data = await fetchMovies();
      const movies = await data.results;
      const cleanMovies = await cleanFetchMovies(movies);
      dispatch(isLoading(false));
      dispatch(addMovies(cleanMovies));
    } catch (error) {
      console.log('All the errors!!!', error)
      // dispatch(errorMessage(error))
    }
  }
}