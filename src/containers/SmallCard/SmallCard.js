import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Route, NavLink} from 'react-router-dom';
import { toggleFavorite, grabCurrMovie } from '../../actions';
import BigCard from '../BigCard/BigCard';

export class SmallCard extends Component {
  constructor(props) {
    super();
  }
  
  // let genresList;

  // if (genres.length > 0) {
  //   let lastGenre = genres.pop();
  //   let genresString = `${genres.name.join(', ')} , and ${lastGenre.name}`;
  //   genresList = <p>Genres: {genresString}</p>
  // }
  handleFavorite = (e) => {
    e.preventDefault();
    console.log(this.props.movie)
    let { isFavorite } = this.props.movie;
    if (!isFavorite) {
      this.addFavorite();
    } else {
      this.removeFavorite();
    }
  }

  removeFavorite = async () => {
    let { user, toggleFavorite } = this.props;
    let { id } = this.props.movie
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

  addFavorite = async () => {
    let { user, toggleFavorite } = this.props;
    let {title, id, summary, poster, release, rating} = this.props.movie;
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

  render() {
    let { movie } = this.props
    let { title, id, summary, poster, rating, isFavorite } = this.props.movie;
    let favClass = `${isFavorite}`;

    return (
      <NavLink className="small-link" to={`/movie/${id}`}>
        <article
          className="SmallCard"
          onClick={() => this.props.grabCurrMovie(movie)}
        >
          <div className="image--container">
            {poster && <img src={poster} alt={title} />}
          </div>
          <div className="content">
            {title && <h3>{title}</h3>}
            {summary && (
              <span className="sub-content">
                <div className="sub-border" />
                <p>{summary.slice(0, 50)}</p>
                <p className="showmore">... (Show More)</p>
              </span>
            )}
          </div>
          <div className="rating">{rating && <h4>{rating}</h4>}</div>
          <button className="faveBtn" onClick={this.handleFavorite}>
            <i className={`fas fa-star fave-${favClass}`} />
          </button>
          <Route
            path={`/movie/`}
            render={({ match }) => (
              <BigCard
                
                movie={this.props.movie}
              />
            )}
          />
        </article>
      </NavLink>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (id) => dispatch(toggleFavorite(id)),
  // will use this to update movies in state so they become favorited on click
  // will need to update favorited movies on component did mount as well when app is first loaded
  grabCurrMovie: (movie)=> dispatch(grabCurrMovie(movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(SmallCard);