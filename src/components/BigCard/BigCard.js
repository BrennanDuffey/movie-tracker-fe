import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {grabCurrMovie} from '../../actions';

class BigCard extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  componentDidMount() {
    console.log(this.props.movie)
  }

  render() {
    let {title, poster, backdrop, summary, genres, rating, release, isFavorite} = this.props.movie

    if (this.props.movie === {}) {
      return <Redirect to='/' />
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
      </section>
    )
  }
}

const mapStateToProps =(state)=>({
  movie: state.currMovie
});

const mapDispatchToProps =(dispatch)=>({
  grabCurrMovie: ({})=> dispatch(grabCurrMovie({}))
});

export default connect(mapStateToProps, mapDispatchToProps)(BigCard); 