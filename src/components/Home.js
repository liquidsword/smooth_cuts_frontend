import React from 'react'
import { Link } from 'react-router-dom'
import tools from '../B+W tools.jpg'

const Home = ({}) => (
<>

    <h2>Welcome to Smooth Cuts, please <Link to="/signup">sign-up</Link> or <Link to="/login">Log In</Link></h2>
<br/>

<div className ="Homescreen"></div>

</>
);

export default Home;
