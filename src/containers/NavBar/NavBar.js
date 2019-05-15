import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const NavBar =(props)=> {

  let {name} = props.user;
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
          onClick={props.handleClick} className="NavBar-Signout">
          <i className={userIcon}></i>
          {!name && <h4>Please Signin</h4>}
          {name && <h4>Hi, {name}</h4>}
        </NavLink>  
        </article>
      <section className="NavButton--container">
        <NavLink exact to="/" className="NavBar-links">In Theaters</NavLink>
        <NavLink to="/favorites" className="NavBar-links">Favorites</NavLink>
        <button onClick={()=> window.alert('Feature Coming Soon')}>Latest Movies</button>
        <button onClick={()=> window.alert('Feature Coming Soon')}>History</button>
        <button onClick={()=> window.alert('Feature Coming Soon')}>Watch List</button>
      </section>
    </nav>
  )
}

NavBar.propTypes={
  dispatch: PropTypes.func,
  user: PropTypes.object
}


export const mapStateToProps =(state)=>({
  user: state.user
});


export default connect(mapStateToProps)(NavBar);