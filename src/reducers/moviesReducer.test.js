import moviesReducer from './moviesReducer';
import * as actions from '../actions';

describe('moviesReducer', () => {
  it('should return the initial state', ()=>{
    const expected = [];
    const result = moviesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should update state correction with addMovies action', ()=>{
    const movies = [{
      title: 'Harry Potter',
      release: 2006, 
      poster: 'fds35235/',
      backdrop: '3425/',
      rating: 3.7,
      summary: 'Youre a wizard harry',
      id: 2,
      genres: ['scifi', 'adventure']
    }];
    const expected = movies;
    const result = moviesReducer(undefined, actions.addMovies(movies));
    expect(result).toEqual(expected);
  });

  it('Should be able to toggle isFavorite of a movie', () => {
    const previousState = [{
      id: 2,
      isFavorite: false
    }];
    const expected = [{
      id: 2,
      isFavorite: true
    }];
    const result = moviesReducer(previousState, actions.toggleFavorite(2));
    expect(result).toEqual(expected);
  });

  it('Should be able to add all favorited movies to the array', () => {
    const previousState = [];
    const mockFavorites = [{
      id:2
    }]
    const movies = [
      {
        title: 'Harry Potter',
        release: 2006, 
        poster: 'fds35235/',
        backdrop: '3425/',
        rating: 3.7,
        summary: 'Youre a wizard harry',
        id: 2,
        genres: ['scifi', 'adventure']
      },
      {
        title: 'Harry Potter',
        release: 2006, 
        poster: 'fds35235/',
        backdrop: '3425/',
        rating: 3.7,
        summary: 'Youre a wizard harry',
        id: 3,
        genres: ['scifi', 'adventure'],
      }
    ];
    const expected = [{
      title: 'Harry Potter',
      release: 2006, 
      poster: 'fds35235/',
      backdrop: '3425/',
      rating: 3.7,
      summary: 'Youre a wizard harry',
      id: 2,
      genres: ['scifi', 'adventure']
    }];
    const result = moviesReducer(previousState, actions.setFavorites(mockFavorites));
  });
});