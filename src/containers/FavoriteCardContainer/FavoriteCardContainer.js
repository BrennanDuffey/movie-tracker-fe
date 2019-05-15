import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SmallCard from '../SmallCard/SmallCard';
import butterflixMascot from '../../images/character.svg';

export const FavoriteCardContainer = ({ movies }) => {
  
  let smallCards = movies
    .filter(movie => movie.isFavorite)
    .map(movie=> (<SmallCard movie={movie} key={movie.id} />))
  return (
      <main className="CardContainer">
        <header>
          <div className="title">
            <img src={butterflixMascot} alt="butterflix-fairy-mascot"/>
            <h1>ButterFlix</h1>
          </div>
          <div className="search-icon">
            <i className="fas fa-search"></i>
          </div>
        </header>
        <div className="display-divider"></div>
        <section className="cards-display">
          {smallCards}
        </section>
      </main>
  )
}

FavoriteCardContainer.propTypes={
  dispatch: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  movies: PropTypes.array,
  user: PropTypes.object
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user
});

export default connect(mapStateToProps)(FavoriteCardContainer);