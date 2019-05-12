import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';


class UserForm extends Component {
  constructor() {
    super()
    this.state= {
      name: '',
      email: '',
      password: '',
      errorMessageLogin: '',
      errorMessageSignup: ''
    }
  }

  handleChange=(e)=>{
    let {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleLogin=(e)=>{
    e.preventDefault();
    let urlLogin = 'http://localhost:3000/api/users';
    const init = this.createInit(this.state)
    fetch(urlLogin, init)
      .then(response=> response.json())
      .then(result=> this.props.loginUser(result.data))
      .catch(error => this.setState({errorMessageLogin: "Incorrect Login Information"}))
  }

  handleSignup = async (e) => {
    e.preventDefault();
    console.log(e)
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
    } catch (error) {
      console.log(error) 
    }

      // .then(response => response.json())
      // .then(result => result)
      // .catch(error => console.log(error, "Email Already Linked to an Account"))
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
    console.log('userState',this.state)
    return (
      <section className="UserForm">
        <form className="existingUser" onSubmit={this.handleLogin}>
          <input name="name" 
            onChange={this.handleChange} type="text" placeholder="Name" />
          <input name="email" 
            onChange={this.handleChange} type="email" placeholder="Email@email.com" />
          <input name="password" 
            onChange={this.handleChange} type="password" placeholder="Password" />
          <input type="submit" value="Login" />
          {this.state.errorMessageLogin && <p>{this.state.errorMessageLogin}</p>}
        </form>
        <form onSubmit={this.handleSignup}>
          <input name="name" onChange={this.handleChange} type="text" placeholder="Name"/>
          <input name="email" onChange={this.handleChange} type="email" placeholder="Email@email.com"/>
          <input name="password" onChange={this.handleChange} type="password" placeholder="Password"/>
          <input type="submit" value="Sign-Up" />
          {this.state.errorMessageSignup && <p>{this.state.errorMessageSignup}</p>}
        </form>

      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user))
});

export default connect(null, mapDispatchToProps)(UserForm)