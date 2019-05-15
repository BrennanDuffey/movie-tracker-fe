import * as actions from './index'

describe('actions', () => {
  it('Should return a type of FETCH_MOVIES with movies', () => {
    const movies = [
      {
        backdrop: "https://image.tmdb.org/t/p/w500//7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
        genres: undefined,
        id: 299534,
        isFavorite: false,
        poster: "https://image.tmdb.org/t/p/w500//or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        rating: 8.5,
        release: "2019-04-24",
        summary: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
        title: "Avengers: Endgame"
      },
      {
        backdrop: "https://image.tmdb.org/t/p/w500//bi4jh0Kt0uuZGsGJoUUfqmbrjQg.jpg",
        genres: undefined,
        id: 287947,
        isFavorite: false,
        poster: "https://image.tmdb.org/t/p/w500//xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
        rating: 7.1,
        release: "2019-03-23",
        summary: "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
        title: "Shazam!"
      }
    ];
    const expected = {
      type: "FETCH_MOVIES",
      movies
    };
    const result = actions.addMovies(movies);
    expect(result).toEqual(expected);
  });

  it('Should return a type of GRAB_MOVIE', () => {
    const movie = {
      backdrop: "https://image.tmdb.org/t/p/w500//7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      genres: undefined,
      id: 299534,
      isFavorite: false,
      poster: "https://image.tmdb.org/t/p/w500//or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      rating: 8.5,
      release: "2019-04-24",
      summary: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
      title: "Avengers: Endgame"
    };
    const expected = {
      type: "GRAB_MOVIE",
      movie
    };
    const result = actions.grabCurrMovie(movie);
    expect(result).toEqual(expected);
  });

  it('Should return a type of IS_LOADING', () => {
    const isLoading = false;
    const expected = {
      type: "IS_LOADING",
      isLoading
    };
    const result = actions.isLoading(isLoading);
    expect(result).toEqual(expected);
  });

  it('Should return a type of SET_ERROR_MESSAGE', () => {
    const errorMessage = 'Hi';
    const expected = {
      type: "SET_ERROR_MESSAGE",
      errorMessage
    };
    const result = actions.errorMessage(errorMessage);
    expect(result).toEqual(expected);
  });

  it('Should return a type of TOGGLE_FAVORITE', () => {
    const id = 23;
    const expected = {
      type: "TOGGLE_FAVORITE",
      id
    };
    const result = actions.toggleFavorite(id);
    expect(result).toEqual(expected);
  });

  it('Should return a type of LOGIN_USER', () => {
    const user = {};
    const expected = {
      type: "LOGIN_USER",
      user
    };
    const result = actions.loginUser(user);
    expect(result).toEqual(expected);
  });

  it('Should return a type of SIGNOUT_USER', () => {
    const expected = {
      type: "SIGNOUT_USER"
    };
    const result = actions.signoutUser()
    expect(result).toEqual(expected)
  });

  it('Should return a type of SET_FAVORITES', () => {
    const favorites = [
      {
        backdrop: "https://image.tmdb.org/t/p/w500//7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
        genres: undefined,
        id: 299534,
        isFavorite: false,
        poster: "https://image.tmdb.org/t/p/w500//or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        rating: 8.5,
        release: "2019-04-24",
        summary: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
        title: "Avengers: Endgame"
      },
      {
        backdrop: "https://image.tmdb.org/t/p/w500//bi4jh0Kt0uuZGsGJoUUfqmbrjQg.jpg",
        genres: undefined,
        id: 287947,
        isFavorite: false,
        poster: "https://image.tmdb.org/t/p/w500//xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
        rating: 7.1,
        release: "2019-03-23",
        summary: "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
        title: "Shazam!"
      }
    ];
    const expected = {
      type: "SET_FAVORITES",
      favorites
    };
    const result = actions.setFavorites(favorites);
    expect(result).toEqual(expected);
  });
});