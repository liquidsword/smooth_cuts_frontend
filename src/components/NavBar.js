import React from 'react';
import { connect } from 'react-redux';
import Login from './login.js';
import Logout from './logout.js';

const NavBar = ({ currentUser }) => {
  return (
    <div className = "NavBar">
      { currentUser ? <strong> Hi ${currentUser.name}, welcome to Smooth Cuts.</strong>: ""}
      { currentUser ? <Logout/> : <Login/> }
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
