import React, { Component } from 'react';

class Header extends Component {
  render(){
    return (
      <div className='header'>
        <h1>DEK</h1>
        <div className='nav'>
          <div className="nav-dropdown">
            <button className='nav-button'>My Account</button>
            <button className='nav-button'>Logout</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
