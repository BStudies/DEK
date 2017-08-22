import React from 'react';
import {Link} from 'react-router-dom';

const CreateCard = () => {

  return (
    <div className='create-card'>

      <h2>Create a Card!</h2>
        <div className="create-front">
          <h3>Front Side</h3>
          <div className="create-front-side-card">

            <form method="POST" onSubmit="">
              <input type="text" placeholder="Question" />
            </form>

          </div>
          <button className="save-front-side-card">Save</button>
        </div>
        <div className="create-back">
          <h3>Back Side</h3>
          <div className="create-back-side-card">

            <form method="POST" onSubmit="">
              <input type="text" placeholder="Answer" />
            </form>

          </div>
          <button className="save-back-side-card">Save</button>
        </div>
    </div>
  )
}

export default CreateCard;
