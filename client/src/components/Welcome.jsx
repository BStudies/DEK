import React from 'react';
import {Link} from 'react-router-dom';

const Welcome = () => {


  return (
    <div className='welcome'>
      <h1>Welcome!</h1>
      <h2>Short intro: what DEK is about...</h2>
      <div className='auth-buttons'>
        <Link to="/login"><button>Sign Up</button></Link>
        <Link to="/register"><button>Log In</button></Link>
      </div>
    </div>
    )
}

export default Welcome;
