import React from 'react';
import { connect } from 'react-redux';

const SmallCard = ({title, id, genres, summary, release, backdrop, poster, rating, loading, user }) => {
  
  // let genresList;

  // if (genres.length > 0) {
  //   let lastGenre = genres.pop();
  //   let genresString = `${genres.name.join(', ')} , and ${lastGenre.name}`;
  //   genresList = <p>Genres: {genresString}</p>
  // }
  const favoriteCard = (e) => {
    e.preventDefault();
    console.log(user)
    const url = 'http://localhost:3000/api/users/favorites/new'
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
    fetch(url, init)
    .then(result => console.log(result))
  }

  return (
    <article className="SmallCard">
      <div className="image">
        {poster && <img src={poster} alt={title} />}
      </div>
      <div className="content">
        {title && <h3>{title}</h3>}
        {summary && <p>{summary}</p>}

      </div>
      <div className="rating">
        {rating && <h4>{rating}</h4>}
      </div>
      <button onClick={favoriteCard}>Favorite</button>
    </article>
    
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user
});

// const mapDispatchToProps = (dispatch) => ({
  // will use this to update movies in state so they become favorited on click
  // will need to update favorited movies on component did mount as well when app is first loaded
// })

export default connect(mapStateToProps)(SmallCard);