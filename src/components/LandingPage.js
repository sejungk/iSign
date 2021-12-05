import React from 'react';
import {Link} from 'react-router-dom'
const LandingPage = () => {
  return (
    <div className="landing-page-wrapper">
        <div className="landing-page-text-wrapper">
          <h1>
            A new way to learn American Sign Language
          </h1>
          <p>
            An interactive learning platform designed to aid you in your ASL learning journey.
          </p>
         
          <Link to="/courses">
          <div className="signup-bttn">
          Get Started
          </div>
          </Link>
        
        </div>
        <div>
          <img src="https://drive.google.com/uc?export=view&id=1Qne_O096dVPtBE53wWv41D9ZNT-481wW" />
        </div>
    </div>
  )
}

export default LandingPage
