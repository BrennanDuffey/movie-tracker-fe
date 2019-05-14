import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import CardContainer from '../CardContainer/CardContainer';
import BigCard from "../BigCard/BigCard";
import FavoriteCardContainer from '../FavoriteCardContainer/FavoriteCardContainer';
import UserForm from '../UserForm/UserForm';
import Signout from '../Signout/Signout';
import { fetchMovies } from '../../utils/apiCalls/apiCalls';
import { addMovies } from '../../actions';
import { cleanFetchMovies } from '../../utils/cleaners/cleanMovies';

export class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetchMovies()
      .then(list => list.results)
      .then(movies=> cleanFetchMovies(movies))
      .then(cleanMovies => this.props.addMovies(cleanMovies))
      .catch(error => console.log('Error in fetching movies from DB'))
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' component={CardContainer} />
        <Route path={`/movie/`} component={BigCard} />
        <Route exact path='/login' component={UserForm}/>
        <Route exact path='/signout' component={Signout}/>
        <Route exact path='/favorites' component={FavoriteCardContainer} />
      </div>
    )
  }
}


export const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
});


export default connect(null, mapDispatchToProps)(App);
