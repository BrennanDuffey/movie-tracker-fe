import { APIkey } from '../../API/APIkey.js'

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

export const deleteFavoriteFetch = (user_id, movie_id) => {
  const url = `http://localhost:3000/api/users/${user_id}/favorites/${movie_id}`;
  const init = { method: 'DELETE' }
  return fetch(url, init) 
  .then(response => {
    if (!response.ok) {
      throw Error('Error in deleting favorite')
    };
  })
};

export const agnosticFetch = (url, init) => {
  return fetch(url, init)
  .then(response => {
    if (!response.ok) {
      throw Error(response)
    } else {
      return response.json()
    };
  })
};

