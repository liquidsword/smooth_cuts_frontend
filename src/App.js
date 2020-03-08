import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import NavBar from './components/NavBar.js';
import Login from './components/login.js';
import Logout from './components/logout.js';
import Signup from './components/Signup.js';
import MyPosts from './components/MyPosts.js'
import Home from './components/Home.js'
import NewPostForm from './components/NewPostForm.js'
import { Route } from 'react-router-dom'
import MainContainer from './components/MainContainer.js'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render () {
    const { loggedIn } = this.props
    return (
      <div className = "App">
          { loggedIn ? }<NavBar/> : <Home/>
          <Swith>
              <Route exact path = '/login' component={Login}/>
              <Route exact path = '/my-posts' component={MyPosts}/>
              <Route exact path = '/signup' render={({history})=><Signup history={history}/>}/>
              <Route exact path = '/posts/new' component={NewPostForm}/>
          </Switch>
          </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouther(connect(mapStateToProps, { getCurrentUser })(App));
