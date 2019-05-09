import moviesReducer from './moviesReducer';
import * as actions from './';

describe('moviesReducer', ()=>{

  it('should return the initial state', ()=>{
    //Setup
    const expected = [];
    //Execution
    const result = moviesReducer(undefined, {});
    //Expectation
    expect(result).toEqual(expected);
  });

  it('should return an action object with a an array of movies and type of FETCH_MOVIES', ()=>{
    //Setup
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
    const expected = {type: 'FETCH_MOVIES', movies};
    //Execution
    const result = actions.addMovies(movies);
    //Expectation
    expect(result).toEqual(expected);
  })
})