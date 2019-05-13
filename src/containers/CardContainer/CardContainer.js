import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovies } from '../../actions';
import SmallCard from '../../components/SmallCard/SmallCard';
import butterflixMascot from '../../images/character.svg';

class CardContainer extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    console.log('movies', this.props.movies)
    let smallCards;

    !this.props.movies.length
      ? smallCards = null 
      : smallCards = this.props.movies.map(movie=>
          (<SmallCard {...movie} />)
        )

    console.log('killing me smalls', smallCards)

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
}

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);