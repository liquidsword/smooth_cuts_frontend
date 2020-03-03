import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import NavBar from './components/NavBar.js';
import Login from './components/login.js';
import Logout from './components/logout.js';
import Signup from './components/Signup.js';
import { Route } from 'react-router-dom'
import MainContainer from './components/MainContainer.js'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render () {
    return (
      <div className = "App">
          <Logout/>
          <NavBar/>
              <Route exact path = '/login' component={Login}/>
              <Route exact path = '/signup' component={Signup}/>
          </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
