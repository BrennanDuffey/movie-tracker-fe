import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import CardContainer from '../CardContainer/CardContainer';
import UserForm from '../UserForm/UserForm';
import Signout from '../Signout/Signout';
import { fetchMovies } from '../../API/apiFetch';
import { addMovies } from '../../actions';
import { cleanFetchMovies } from '../../utils/cleaners/cleanMovies';

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
      .then(movies=> cleanFetchMovies(movies))
      .then(cleanMovies => this.props.addMovies(cleanMovies))
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' component={CardContainer} />
        <Route exact path='/login' component={UserForm}/>
        <Route exact path='/signout' component={Signout}/>
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
