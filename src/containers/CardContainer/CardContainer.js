import React, {Component} from 'react';

class CardContainer extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    // let { title, id, genres, homepage, descript, tagline, releaseDate, backdrop, poster, rating, runtime, loading} = this.props.latest;
    let displayCard;
    this.props.loading ? displayCard = null : displayCard = 
      <article className="SmallCard">
        <div className="image">
        </div>
        <div className="content">
          <h3>this.props.latest.title</h3>
          <p>this.props.latest.genres</p>
          <p>this.props.latest.tagline</p>
        </div>
        <div className="rating">
          <h4>3.7</h4>
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

export default CardContainer;