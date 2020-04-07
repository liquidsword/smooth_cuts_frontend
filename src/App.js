import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import NavBar from './components/NavBar.js';
import Login from './components/login.js';
import Logout from './components/logout.js';
import Signup from './components/Signup.js';
import MyPosts from './components/MyPosts.js'
import PostCard from './components/PostCard.js'
import Home from './components/Home.js'
import NewPostFormWrapper from './components/NewPostFormWrapper.js'
import { Route, Switch, withRouter, Link } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render () {
    const { loggedIn, posts } = this.props
    return (
      <div className = "App">
          { loggedIn ? <NavBar location={ this.props.location }/> : <Home/> }
          <Switch>
              <Route exact path = '/login' component={Login}/>
              <Route exact path = '/posts' component={MyPosts}/>
              <Route exact path = '/signup' render={({history})=><Signup history={history}/>}/>
              <Route exact path = '/posts/new' component={NewPostFormWrapper}/>
              <Route exact path = '/posts/:id' render ={props => {
                const post = posts.find(post => post.id === props.match.params.id)
                console.log(post)
                return <PostCard post={post} {...props}/>
                }
              }/>
          </Switch>
          </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    posts: state.myPosts
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
