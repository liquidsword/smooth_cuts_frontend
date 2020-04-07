import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import Logout from './logout.js';

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className = "NavBar">
      <NavLink exact activeClassName="active" to="/posts">My Posts  </NavLink>
      <NavLink exact activeClassName="active" to="/posts/new">New Posts  </NavLink>
      { loggedIn ? <Logout/> : null }
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
