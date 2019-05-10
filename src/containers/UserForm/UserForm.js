import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';


class UserForm extends Component {
  constructor() {
    super()
    this.state= {
      name: '',
      email: '',
      password: ''
    }
  }

  handleChange=(e)=>{
    let {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleLogin=(e)=>{
    e.preventDefault();
    let urlLogin = 'http://localhost:3000/api/users';
    const init = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    }
    fetch(urlLogin, init)
      .then(response=> response.json())
      .then(result=> this.props.loginUser(result.data))
  }

  handleSignup=(e)=>{
    e.preventDefault();
    console.log(e)
    let urlLogin = 'http://localhost:3000/api/users/new';
    const init = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    }
    fetch(urlLogin, init)
      .then(response=> response.json())
      .then(result=> console.log(result))
  }

  render() {
    console.log('userState',this.state)
    return (
      <section className="UserForm">
        <form className="existingUser" onSubmit={this.handleLogin}>
          <h2>Existing User</h2>
          <input name="name" 
            onChange={this.handleChange} type="text" placeholder="Name" />
          <input name="email" 
            onChange={this.handleChange} type="email" placeholder="Email@email.com" />
          <input name="password" 
            onChange={this.handleChange} type="password" placeholder="Password" />
          <input className="user-submit" type="submit" value="Login" />
        </form>
        <form className="newUser" onSubmit={this.handleSignup}>
          <h2>New User: Create Account</h2>
          <input name="name" onChange={this.handleChange} type="text" placeholder="Name"/>
          <input name="email" onChange={this.handleChange} type="email" placeholder="Email@email.com"/>
          <input name="password" onChange={this.handleChange} type="password" placeholder="Password"/>
          <input className="user-submit" type="submit" value="Sign-Up" />
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user))
});

export default connect(null, mapDispatchToProps)(UserForm)