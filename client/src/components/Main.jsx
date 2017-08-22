import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const Main = () => {

  return (
    <div className='main-menu'>
      <Header />
      <div className='menu-buttons'>
        <button className='menu-button'>Create Card</button>
        <button className='menu-button'>Take Quiz</button>
        <button className='menu-button'>Edit Cards</button>
      </div>
    </div>
    )
}

export default Main;
