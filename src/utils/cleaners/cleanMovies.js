export const cleanFetchMovies =(movies)=>{
  return movies.map(movie=> (
    {
      title: movie.title,
      poster: movie.poster_path,
      backdrop: movie.backdrop_path,
      summary: movie.overview,
      rating: movie.vote_average,
      genres: movie.genres,
      release: movie.release_date,
      id: movie.id
    }
  ))
};