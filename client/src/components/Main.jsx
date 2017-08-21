import React from 'react';
import {Link} from 'react-router-dom';

const Main = () => {

  return (
    <div className='main-menu'>
      <h2>Main Menu</h2>
      <div className='menu-buttons'>
        <button>Create Card</button>
        <button>Take Quiz</button>
        <button>Edit Cards</button>
      </div>
    </div>
    )
}

export default Main;
