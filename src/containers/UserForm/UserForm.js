import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { loginUser, isLoading, errorMessage, setFavorites } from '../../actions';

class UserForm extends Component {
  constructor() {
    super()
    this.state= {
      name: '',
      email: '',
      password: '',
      errorMessageLogin: '',
      errorMessageSignup: '',
      successfulLogin: false
    }
  }

  handleChange = (e) => {
    let {name, value} = e.target;
    this.setState({[name]: value});
  }

  fetchFavorites = async (id) => {
    const url = `http://localhost:3000/api/users/${id}/favorites`
    try {
      const response = await this.fetchData(url, null)
      const favorites = await response.data
      console.log(favorites)
      this.props.setFavorites(favorites)
    } catch {

    }
  }

  handleLogin=(e)=>{
    e.preventDefault();
    let urlLogin = 'http://localhost:3000/api/users';
    const init = this.createInit(this.state)
    this.fetchData(urlLogin, init)
      .then(result => {
        this.setState({successfulLogin: true})
        this.props.loginUser(result.data);
        this.fetchFavorites(result.data.id)
      })
      .catch(error =>
        this.setState({ errorMessageLogin: "Incorrect Login Information" })
      );
  }

  fetchData = (url, init) => {
    return fetch(url, init)
      .then(response=> {if (!response.ok){
        console.log(response.ok)
        throw Error('Error Fetching Data')
      }else{
        return response.json()
      }}
    )
  }

  handleSignup = async (e) => {
    e.preventDefault();
    this.props.isLoading(true);
    let urlSignup = 'http://localhost:3000/api/users/new';
    const init = this.createInit(this.state)
    try {
      const response = await fetch(urlSignup, init)
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const result = await response.json();
      const newUser = { 
        id: result.id, 
        name: this.state.name, 
        email: this.state.email, 
        password: this.state.password 
      };
      this.props.loginUser(newUser)
      this.setState({successfulLogin: true})
    } catch (error) {
      this.props.setErrorMessage('Email already used for an account')
    }
    this.props.isLoading(false)
  }

  createInit(body) {
    const init = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    }
    return init
  }

  render() {
    console.log('small state', this.state)
    if (this.state.successfulLogin) {
      return <Redirect to='/' />
    }

    return (
      <section className="UserForm">
        <form className="existingUser" onSubmit={this.handleLogin}>
          <h2>Existing User</h2>
          <span className="EU-input">
            <input name="email" 
              onChange={this.handleChange} type="email" placeholder="Email@email.com" />
            <input name="password" 
              onChange={this.handleChange} type="password" placeholder="Password" />
          </span>
          <input className="user-submit" type="submit" value="Login" />
        </form>
        <div className="divider"></div>
        <form className="newUser" onSubmit={this.handleSignup}>
          <h2>New User: Create Account</h2>
          <span className="EU-input">
            <input name="name" onChange={this.handleChange} type="text" placeholder="Name"/>
            <input name="email" onChange={this.handleChange} type="email" placeholder="Email@email.com"/>
            <input name="password" onChange={this.handleChange} type="password" placeholder="Password"/>
          </span>
          <input className="user-submit" type="submit" value="Sign-Up" />
          {this.state.errorMessageSignup && <p>{this.state.errorMessageSignup}</p>}
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
  isLoading: (bool) => dispatch(isLoading(bool)),
  setErrorMessage: (message) => dispatch(errorMessage(message)),
  setFavorites: (favorites) => dispatch(setFavorites(favorites))
});

export default connect(null, mapDispatchToProps)(UserForm)