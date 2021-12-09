import React from 'react';
import { Link } from 'react-router-dom';

const AlphabetPage = () => {
  return (
    <div className="alphabet-page-wrapper">
      <div className="back-bttn">
        <Link to="/courses">
          <img src="https://drive.google.com/uc?export=view&id=16ORv_43yS04SQLquK8vike9O0rTlJMWW" />
        </Link>
      </div>
       <div className="alphabet-header">The alphabet</div>
       <div className="alphabet-lessons-wrapper">
         <div className="lesson-wrapper">
          <Link to={{pathname:"/learning", letters:{
            letterArr:['a','b','c','d','e']
          }}} >
            <div className="lesson-item">
              <h3>A to E</h3>
            </div>
          </Link>
         </div>
         <div className="lesson-wrapper">
            <img className="lesson-lock-icon" src="https://drive.google.com/uc?export=view&id=1McUUcvTct9-_NKWli101wYtYM6RjUhlR" />
            <div className="lesson-item locked-item">
              <h3>F to J</h3>
            </div>
         </div>
         <div className="lesson-wrapper">
            <img className="lesson-lock-icon" src="https://drive.google.com/uc?export=view&id=1McUUcvTct9-_NKWli101wYtYM6RjUhlR" />
            <div className="lesson-item locked-item">
              <h3>H to L</h3>
            </div>
         </div>
         <div className="lesson-wrapper">
            <img className="lesson-lock-icon" src="https://drive.google.com/uc?export=view&id=1McUUcvTct9-_NKWli101wYtYM6RjUhlR" />
            <div className="lesson-item locked-item">
              <h3>M to Q</h3>
            </div>
         </div>
         <div className="lesson-wrapper">
            <img className="lesson-lock-icon" src="https://drive.google.com/uc?export=view&id=1McUUcvTct9-_NKWli101wYtYM6RjUhlR" />
            <div className="lesson-item locked-item">
              <h3>R to V</h3>
            </div>
         </div>
         <div className="lesson-wrapper">
            <img className="lesson-lock-icon" src="https://drive.google.com/uc?export=view&id=1McUUcvTct9-_NKWli101wYtYM6RjUhlR" />
            <div className="lesson-item locked-item">
              <h3>W to Z</h3>
            </div>
         </div>
       </div>
    </div>
  )
}

export default AlphabetPage
