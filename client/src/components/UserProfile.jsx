import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const UserProfile = (props) => {

  return (
    <div className='user-profile'>
      <Header />

      <h2>User Profile</h2>

      <div className="user-profile-info">
        <h3>Username: {props.username}</h3>
        <h3>First Name: {props.firstname}</h3>
        <h3>Last Name: {props.lastname}</h3>
        <h3>E-mail address: {props.email}</h3>
      </div>

      <Footer />
    </div>
    )
}

export default UserProfile;
