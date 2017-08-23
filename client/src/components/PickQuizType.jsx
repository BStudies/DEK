import React from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const PickQuizType = () => {

  return (
    <div className='pick-quiz-type'>
      <Header />

      <h2>Pick Your Quiz Type!</h2>
      <div className='pickquiz-form'>
          <button className="pickquiz-button">Basic Quiz<p>(review all cards)</p></button>
          <button className="pickquiz-button">Curated Quiz<p>(spaced repetition)</p></button>
      </div>

      <Footer />
    </div>
    )
}

export default PickQuizType;


