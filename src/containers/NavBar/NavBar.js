import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

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


  render(){
    let userIcon;
    let userLink;

    if (this.state.isSignedin) {
      userIcon = 'fas signin-icon fa-user-minus';
      userLink = '/signout';
    } else {
      userIcon = 'fas signin-icon fa-user-plus';
      userLink = '/login';
    }

    this.state.isSignedin
        ? userIcon = 'fas signin-icon fa-user-minus'
        : userIcon = 'fas signin-icon fa-user-plus';

    return (
      <nav className="NavBar">
          <article className="user--content">
            <div className="user-img--container">
            <NavLink 
              to={userLink}
              onClick={this.handleClick} className="NavBar-Signout">
              <i className={userIcon}></i>
              </NavLink>  
            </div>
            <h4>Hi, Name</h4>
          </article>
        <section className="NavButton--container">
          <NavLink to="/" className="NavBar-links">In Theaters</NavLink>
          <NavLink to="/favorites" className="NavBar-links">Favorites</NavLink>
          <button>Latest Movies</button>
          <button>History</button>
          <button>Watch List</button>
        </section>
      </nav>
    )
  }
}

export default NavBar;