import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink, Redirect} from 'react-router-dom';
import { toggleFavorite, errorMessage } from "../../actions";
import {
  deleteFavoriteFetch,
  agnosticFetch
} from "../../utils/apiCalls/apiCalls";

export class BigCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleFavorite = e => {
    e.preventDefault();
    console.log(this.props.movie);
    let { isFavorite } = this.props.movie;
    if (!isFavorite) {
      console.log('add')
      this.addFavorite();
    } else {
      console.log("remove");
      this.removeFavorite();
    }
  };

  removeFavorite = async () => {
    let { user, toggleFavorite, setErrorMessage } = this.props;
    let { id } = this.props.movie;
    try {
      const response = deleteFavoriteFetch(user.id, id);
      toggleFavorite(id);
    } catch {
      setErrorMessage("Error in deleting favorite");
    }
  };

  addFavorite = async () => {
    let { user, toggleFavorite, setErrorMessage } = this.props;
    let {
      title,
      id,
      summary,
      poster,
      release,
      rating
    } = this.props.movie;
    const url = "http://localhost:3000/api/users/favorites/new";
    const init = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        user_id: user.id,
        movie_id: id,
        overview: summary,
        poster_path: poster,
        release_date: release,
        vote_average: rating
      })
    };
    try {
      const result = await agnosticFetch(url, init);
      toggleFavorite(id);
    } catch {
      setErrorMessage("Please sign in to favorite");
      window.alert(this.props.errorMessage);
    }
  };

  render() {
    let {
      title,
      backdrop,
      summary,
      genres,
      rating,
      release,
      isFavorite,
    } = this.props.movie;
    let favClass = `${isFavorite}`;

    if (this.props.movie === {}) {
      return <Redirect to="/" />;
    }

    return (
      <main>
        <section className="BigCard">
          {backdrop && (
            <img
              className="backdrop"
              src={backdrop}
              alt="Backdrop Unavailable"
            />
          )}
          <article className="big-content">
            {title && <h2>{title}</h2>}
            {release && <h4>{release}</h4>}
            <div className="big-subcontent">
              {summary && <p>{summary}</p>}
              {genres && <p>{genres}</p>}
            </div>
            {rating && <h3>Avg Score: {rating}</h3>}
          </article>
          <button className="faveBtn" onClick={this.handleFavorite}>
            <i className={`fas fa-star fave-${favClass}`} />
          </button>
          <NavLink to="/" className="close">
            <i className="fas fa-times-circle" />
          </NavLink>
        </section>
      </main>
    );
  }
}

BigCard.propTypes = {
  movie: PropTypes.object,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  movie: state.currMovie,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setErrorMessage: message => dispatch(errorMessage(message)),
  toggleFavorite: id => dispatch(toggleFavorite(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BigCard); 