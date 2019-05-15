import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SmallCard from '../SmallCard/SmallCard';
import butterflixMascot from '../../images/character.svg';

export class CardContainer extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    let smallCards;
    !this.props.movies.length
      ? smallCards = null 
      : smallCards = this.props.movies.map(movie=>
          (<SmallCard movie={movie} key={movie.id} />)
        )

    return (
      <main className="CardContainer">
        <header>
          <div className="title">
            <img src={butterflixMascot} alt="butterflix-fairy-mascot"/>
            <h1>ButterFlix</h1>
          </div>
        </header>
        <div className="display-divider"></div>
        <section className="cards-display">
          {smallCards}
        </section>
      </main>
    )
  }
}

CardContainer.propTypes={
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  movies: PropTypes.array
}

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(CardContainer);