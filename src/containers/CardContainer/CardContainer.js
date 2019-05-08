import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addMovies} from '../../actions';

class CardContainer extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    let { title, id, genres, summary, release, backdrop, poster, rating, loading} = this.props.movies;
    let displayCard;
    this.props.loading ? displayCard = null : displayCard = 
      <article className="SmallCard">
        <div className="image">
        </div>
        <div className="content">
          <h3>{title}</h3>
          <p>{genres}</p>
          <p>{summary}</p>
        </div>
        <div className="rating">
          <h4>{rating}</h4>
        </div>
      </article>;

    return (
      <main className="CardContainer">
        <header>
          <div className="search-icon"></div>
        </header>
        <section className="cards-display">
          {displayCard}
        </section>
      </main>
    )
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);