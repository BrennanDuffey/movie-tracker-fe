import { cleanFetchMovies } from './cleanMovies.js'

describe('cleanMovies', () => {
  it.skip('should take in an unclean movie and make it clean', () => {
    let mockMovie = {
      "vote_count": 4611,
      "id": 299534,
      "video": false,
      "vote_average": 8.6,
      "title": "Avengers: Endgame",
      "popularity": 341.226,
      "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      "original_language": "en",
      "original_title": "Avengers: Endgame",
      "genre_ids": [
        12,
        878,
        28
      ],
      "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      "adult": false,
      "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
      "release_date": "2019-04-24"
    };
    let expected = {
      title: "Avengers: Endgame",
      "id": 299534,
      "vote_average": 8.6,
      "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store."
    };
  });
});