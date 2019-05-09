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

  handleSubmit=(e)=>{
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

  render() {
    console.log('userState',this.state)
    return (
      <section className="UserForm">
        <form className="existingUser" onSubmit={this.handleSubmit}>
          <input name="name" 
            onChange={this.handleChange} type="text" value={this.state.name} placeholder="Name" />
          <input name="email" 
            onChange={this.handleChange} type="email" value={this.state.email} placeholder="Email@email.com" />
          <input name="password" 
            onChange={this.handleChange} type="password" value={this.state.password} placeholder="Password" />
          <input type="submit" value="Login" />
        </form>
        <form>
          <input name="name" onChange={this.handleChange} type="text" value={this.state.name} placeholder="Name"/>
          <input name="email" onChange={this.handleChange} type="email" value={this.state.email} placeholder="Email@email.com"/>
          <input name="password" onChange={this.handleChange} type="password" value={this.state.password} placeholder="Password"/>
          <input type="submit" value="Sign-Up" />
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user))
});

export default connect(null, mapDispatchToProps)(UserForm)