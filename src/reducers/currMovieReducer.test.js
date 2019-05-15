import currMovieReducer from './currMovieReducer'
import * as actions from '../actions';

describe('currMovieReducer', () => {
  it('Should return the initial state', () => {
    const expected = {};
    const result = currMovieReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('Should return the state with a movie object', () => {
    const movie = {
      backdrop: 'https://image.tmdb.org/t/p/w500//7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
      genres: undefined,
      id: 299534,
      isFavorite: false,
      poster: 'https://image.tmdb.org/t/p/w500//or06FN3Dka5tukK1e9sl16pB3iy.jpg',
      rating: 8.5,
      release: '2019-04-24',
      summary: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos actions and restore order to the universe once and for all, no matter what consequences may be in store.',
      title: 'Avengers: Endgame'
    };
    const result = currMovieReducer(undefined, actions.grabCurrMovie(movie));
    expect(result).toEqual(movie)
  });

  it('Should be able to update state', () => {
    const movie = {
      backdrop: 'https://image.tmdb.org/t/p/w500//7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
      genres: undefined,
      id: 299534,
      isFavorite: false,
      poster: 'https://image.tmdb.org/t/p/w500//or06FN3Dka5tukK1e9sl16pB3iy.jpg',
      rating: 8.5,
      release: '2019-04-24',
      summary: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos actions and restore order to the universe once and for all, no matter what consequences may be in store.',
      title: 'Avengers: Endgame'
    };
    const previousState = { title: 'Shazam'};
    const result = currMovieReducer(previousState, actions.grabCurrMovie(movie));
    expect(result).toEqual(movie)
  });
});