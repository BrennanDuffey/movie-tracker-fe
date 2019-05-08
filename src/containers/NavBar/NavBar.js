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
        <section className="user--container">
          <article className="user--content">
            <h4>Hi, Name</h4>
          </article>
        </section>
        <section className="NavButton--container">
          <button>My Favorites</button>
          <button>All Movies</button>
          <button>Latest Movies</button>
          <button>History</button>
          <button>Watch List</button>
        </section>
      </nav>
    )
  }
}

export default NavBar;