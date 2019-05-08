import { APIkey } from './APIkey.js'

export const fetchMovies = () => {
  const url = 'https://api.themoviedb.org/3/movie/'
  return fetch(`${url}now_playing${APIkey}`)
  .then(response => {
    if (!response.ok) {
      throw Error('Error in fetching films');
    } else {
      return response.json();
    };
  })
};