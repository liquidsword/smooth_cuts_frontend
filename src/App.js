import React from 'react';
import './App.css';
import Login from "./components/login.js"
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render (){
    return (
      <Login/>
    );
  }
}

export default App;
