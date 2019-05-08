import React, {Component} from 'react';
import { addMovies } from '../../actions';
import { fetchMovies } from '../../API/apiFetch';
import NavBar from '../NavBar/NavBar';
import CardContainer from '../CardContainer/CardContainer';
import { APIkey } from '../../API/APIkey';
import { connect } from 'react-redux';

export class App extends Component {
  constructor() {
    super()
    this.state= {
      isLoading: true,
      filmLatest: {}
    }
  }

  componentDidMount() {
    fetchMovies()
      .then(list => list.results)
      .then(movies => this.props.addMovies(movies))
      // .then(cleanMovies => this.props.addMovies(cleanMovies))
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <NavBar />
        <CardContainer
          loading= {this.state.isLoading}
          latest= {this.state.latestFilm} 
        />
      </div>
    )
  }
}

// export const mapStateToProps = (state) => ({
//   movies: state.movies
// })

export const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
});


export default connect(null, mapDispatchToProps)(App);
