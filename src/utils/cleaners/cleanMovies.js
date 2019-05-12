export const cleanFetchMovies =(movies)=>{
  return movies.map(movie=> (
    {
      title: movie.title,
      poster: 
      `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      backdrop: 
      `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
      summary: movie.overview,
      rating: movie.vote_average,
      genres: movie.genres,
      release: movie.release_date,
      id: movie.id,
      isFavorite: false
    }
  ))
};