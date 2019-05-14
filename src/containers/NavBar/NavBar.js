import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  constructor() {
    super()
    this.state= {
      isSignedin: ''
    }
  }

  handleClick=()=>{
    let stateValue = this.state.isSignedin;
    this.setState({isSignedin: !stateValue})
  }

  comingSoon=()=>{
    window.alert('Feature Coming Soon');
  }

  render(){
    let {name} = this.props.user;
    let userIcon;
    let userLink;

    if (name) {
      userIcon = 'fas signin-icon fa-user-minus';
      userLink = '/signout';
    } else {
      userIcon = 'fas signin-icon fa-user-plus';
      userLink = '/login';
    }

    return (
      <nav className="NavBar">
          <article className="user--content">
          <NavLink 
              to={userLink}
              onClick={this.handleClick} className="NavBar-Signout">
              <i className={userIcon}></i>
              {!name && 
                <h4>Hi, Signin</h4>}
                {name && <h4>Hi, {name}</h4>}
          </NavLink>  
          </article>
        <section className="NavButton--container">
          <NavLink to="/" className="NavBar-links">In Theaters</NavLink>
          <NavLink to="/favorites" className="NavBar-links">Favorites</NavLink>
          <button onClick={this.comingSoon}>Latest Movies</button>
          <button onClick={this.comingSoon}>History</button>
          <button onClick={this.comingSoon}>Watch List</button>
        </section>
      </nav>
    )
  }
}

export const mapStateToProps =(state)=>({
  user: state.user
});


export default connect(mapStateToProps)(NavBar);