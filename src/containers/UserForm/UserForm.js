import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { loginUser, isLoading, errorMessage, setFavorites } from '../../actions';
import { agnosticFetch } from '../../utils/apiCalls/apiCalls'


export class UserForm extends Component {
  constructor() {
    super()
    this.state= {
      name: '',
      email: '',
      password: '',
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
      const response = await agnosticFetch(url, null)
      const favorites = await response.data
      this.props.setFavorites(favorites)
    } catch {
      this.props.setErrorMessage('Error in fetching user favorites')
    }
  }

  handleLogin = (e) =>{
    e.preventDefault();
    const url = 'http://localhost:3000/api/users';
    const init = this.createInit(this.state)
    agnosticFetch(url, init)
      .then(result => {
        this.setState({successfulLogin: true})
        this.props.loginUser(result.data);
        this.fetchFavorites(result.data.id)
      })
      .catch(error => {
        this.props.setErrorMessage('Incorrect email/password combination')
        window.alert('Incorrect email/password combination')
      });
  };

  handleSignup = async (e) => {
    e.preventDefault();
    this.props.isLoading(true);
    const url = 'http://localhost:3000/api/users/new';
    const init = this.createInit(this.state)
    try {
      const result = await agnosticFetch(url, init);
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
      window.alert('Email already used for an account')
    }
    this.props.isLoading(false)
  };

  createInit(body) {
    const init = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    }
    return init
  };

  render() {
    if (this.state.successfulLogin) {
      return <Redirect to='/' />
    }

    return (
      <section className="UserForm">
        <form className="existingUser" onSubmit={this.handleLogin}>
          <h2>Existing User</h2>
          <span className="EU-input">
            <input
              name="email"
              onChange={this.handleChange}
              type="email"
              placeholder="Email@email.com"
            />
            <input
              name="password"
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
            />
          </span>
          <input className="user-submit" type="submit" value="Login" />
        </form>
        <div className="divider" />
        <form className="newUser" onSubmit={this.handleSignup}>
          <h2>New User: Create Account</h2>
          <span className="EU-input">
            <input
              name="name"
              maxLength="10"
              onChange={this.handleChange}
              type="text"
              placeholder="Name"
            />
            <input
              name="email"
              onChange={this.handleChange}
              type="email"
              placeholder="Email@email.com"
            />
            <input
              name="password"
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
            />
          </span>
          <input className="user-submit" type="submit" value="Sign-Up" />
        </form>
      </section>
    );
  }
}

UserForm.propTypes={
  history: PropTypes.object,
  isLoading: PropTypes.func,
  location: PropTypes.object,
  loginUser: PropTypes.func,
  match: PropTypes.object,
  setErrorMessage: PropTypes.func,
  setFavorites:PropTypes.func
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
  isLoading: (bool) => dispatch(isLoading(bool)),
  setErrorMessage: (message) => dispatch(errorMessage(message)),
  setFavorites: (favorites) => dispatch(setFavorites(favorites))
});

export default connect(null, mapDispatchToProps)(UserForm)