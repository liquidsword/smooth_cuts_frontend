import React from 'react'
import { Link } from 'react-router-dom'


const Home = ({}) => (
<>

    <h2>Welcome to Smooth Cuts, please <Link to="/signup">sign-up</Link> or <Link to="/login">Log In</Link></h2>
<br/>

<div className ="Homescreen"></div>

</>
);

export default Home;
