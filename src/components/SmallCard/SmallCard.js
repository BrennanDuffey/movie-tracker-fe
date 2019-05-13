import React from 'react';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions';

const SmallCard = ({ title, id, genres, summary, release, backdrop, poster, rating, loading, user, isFavorite, toggleFavorite }) => {
  
  // let genresList;

  // if (genres.length > 0) {
  //   let lastGenre = genres.pop();
  //   let genresString = `${genres.name.join(', ')} , and ${lastGenre.name}`;
  //   genresList = <p>Genres: {genresString}</p>
  // }
  const handleFavorite = (e) => {
    e.preventDefault();
    if (!isFavorite) {
      addFavorite();
    } else {
      removeFavorite();
    }
  }

  const removeFavorite = async () => {
    const url = `http://localhost:3000/api/users/${user.id}/favorites/${id}`;
    const init = { method:'DELETE' }
    try {
      const response = await fetch(url, init);
      if (!response.ok) {
        throw Error(response.text)
      }
      toggleFavorite(id);
    } catch {

    }
  }

  const addFavorite = async () => {
    const url = 'http://localhost:3000/api/users/favorites/new';
    const init = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title,
        user_id: user.id,
        movie_id: id,
        overview: summary,
        poster_path: poster,
        release_date: release,
        vote_average: rating
      })
    }
    try {
      const response = await fetch(url, init);
      if(!response.ok) {
        throw Error(response.statusText)
      }
      toggleFavorite(id)
    } catch {
      // make something pop up to sat please sign in to favorite
    }
  }

  return (
    <article className="SmallCard">
      <div className="image--container">
        {poster && <img src={poster} alt={title} />}
      </div>
      <div className="content">
        {title && <h3>{title}</h3>}
        {summary && 
          <span className="sub-content">
            <div className="sub-border"></div>
            <p>{summary.slice(0,50)}</p>
            <p className="showmore">... (Show More)</p>
          </span>
        }

      </div>
      <div className="rating">
        {rating && <h4>{rating}</h4>}
      </div>
      <button onClick={handleFavorite}>Favorite</button>
    </article>
    
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (id) => dispatch(toggleFavorite(id))
  // will use this to update movies in state so they become favorited on click
  // will need to update favorited movies on component did mount as well when app is first loaded
})

export default connect(mapStateToProps, mapDispatchToProps)(SmallCard);