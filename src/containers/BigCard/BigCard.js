import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink, Redirect} from 'react-router-dom';

export class BigCard extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  render() {
    let {title, poster, backdrop, summary, genres, rating, release, isFavorite} = this.props.movie

    if (this.props.movie === {}) {
      return <Redirect to="/" />;
    }

    return(
      <section className="BigCard">
        <article className="big-main">
          { backdrop && <img className="backdrop" src={backdrop} alt="Backdrop Unavailable" />}
        { isFavorite && <i>Heart</i>}
        { title && 
            <h2>{title} 
              <span>({release})</span>
            </h2>}
          { summary && <p>{summary}</p> }
          { genres && <p>{genres}</p>}
        </article>
        { rating && <h2>{rating}</h2>}
        { poster && <img src={poster} alt={title} />}
        <NavLink to='/'>X</NavLink>
      </section>
    )
  }
}

BigCard.propTypes= {
  movie: PropTypes.object
}

const mapStateToProps =(state)=>({
  movie: state.currMovie
});

export default connect(mapStateToProps)(BigCard); 