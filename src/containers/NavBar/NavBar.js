import React, {Component} from 'react';

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
          <button>My Favorites</button>
          <button className="active">All Movies</button>
          <button>Latest Movies</button>
          <button>History</button>
          <button>Watch List</button>
        </section>
      </nav>
    )
  }
}

export default NavBar;