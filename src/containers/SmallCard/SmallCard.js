import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Route, NavLink} from 'react-router-dom';
import { toggleFavorite, grabCurrMovie, errorMessage } from '../../actions';
import BigCard from '../BigCard/BigCard';
import { deleteFavoriteFetch, agnosticFetch } from '../../utils/apiCalls/apiCalls'

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
    let { user, toggleFavorite, setErrorMessage } = this.props;
    let { id } = this.props.movie
    try {
      const response = deleteFavoriteFetch(user.id, id)
      toggleFavorite(id);
    } catch {
      setErrorMessage('Error in deleting favorite');
    }
  }

  addFavorite = async () => {
    let { user, toggleFavorite, setErrorMessage } = this.props;
    let { title, id, summary, poster, release, rating } = this.props.movie;
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
      const result = await agnosticFetch(url, init)
      toggleFavorite(id)
    } catch {
      setErrorMessage('Please sign in to favorite')
      window.alert(this.props.errorMessage)
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

SmallCard.propTypes={
  errorMessage: PropTypes.string,
  grabCurrMovie: PropTypes.func,
  movie: PropTypes.object,
  movies: PropTypes.array,
  setErrorMessage: PropTypes.func,
  toggleFavorite: PropTypes.func,
  user: PropTypes.object
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user,
  errorMessage: state.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (id) => dispatch(toggleFavorite(id)),
  setErrorMessage: (message) => dispatch(errorMessage(message)),
  // will use this to update movies in state so they become favorited on click
  // will need to update favorited movies on component did mount as well when app is first loaded
  grabCurrMovie: (movie)=> dispatch(grabCurrMovie(movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(SmallCard);