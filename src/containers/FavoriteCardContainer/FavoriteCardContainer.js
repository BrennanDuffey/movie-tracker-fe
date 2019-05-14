import React from 'react';
import { connect } from 'react-redux';
import SmallCard from '../SmallCard/SmallCard';
import butterflixMascot from '../../images/character.svg';

const FavoriteCardContainer = ({ movies }) => {
  
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

const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user
});

export default connect(mapStateToProps)(FavoriteCardContainer);