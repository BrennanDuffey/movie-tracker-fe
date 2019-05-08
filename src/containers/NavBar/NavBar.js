import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends Component {
  constructor() {
    super()
    this.state= {

    }
  }

  render(){
    return (
      <nav className="NavBar">
          <article className="user--content">
            <div className="user-img--container"></div>
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