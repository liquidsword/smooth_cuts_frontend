import React from 'react'
import Login from './login.js'
import Signup from './Signup.js'
import { Link } from 'react-router-dom'

const Home = ({}) => (
  <div>
    <h4>Welcome, please <Link to="/signup">sign-up</Link> or <Link to="/login">Log In</Link></h4>
     OR
  </div>
);

export default Home;
