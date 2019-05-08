import React, {Component} from 'react';
import {addMovies} from '../../actions';
import {fetchMovies} from '../../API/apiFetch';
import NavBar from '../NavBar/NavBar';
import CardContainer from '../CardContainer/CardContainer';
import {APIkey} from '../../API/APIkey';

class App extends Component {
  constructor() {
    super()
    this.state= {
      isLoading: true,
      filmLatest: {}
    }
  }

  componentDidMount() {
    let URL = 'https://api.themoviedb.org/3/movie/';
    fetch(`${URL}latest?${APIkey}`)
      .then(response=> response.json())
      // .then(results=> console.log(results))
      .then(results=> this.setState({ 
        isLoading: false,
        filmLatest: {
        title: results.title,
        id: results.id,
        genres: results.genres,
        homepage: results.homepage,
        descript: results.overview,
        tagline: results.tagline,
        releaseDate: results.release_date,
        backdrop: results.backdrop_path,
        poster: results.poster_path,
        rating: results.popularity,
        runtime: results.runtime
      }
      }))
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <NavBar />
        <CardContainer
        loading= {this.state.isLoading}
        latest= {this.state.latestFilm} />
      </div>
    )
  }
}

export default App;
