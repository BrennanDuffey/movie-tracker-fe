import React, {Component} from 'react';
import { addMovies } from '../../actions';
import { fetchMovies } from '../../API/apiFetch';
import NavBar from '../NavBar/NavBar';
import CardContainer from '../CardContainer/CardContainer';
import { APIkey } from '../../API/APIkey';

class App extends Component {
  constructor() {
    super()
    this.state= {
      isLoading: true,
      filmLatest: {}
    }
  }

  componentDidMount() {
    fetchMovies()
      .then(results => results.movies)
      .then(movies => cleanMovies(movies))
      .then(cleanMovies => addMovies(cleanMovies))
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
