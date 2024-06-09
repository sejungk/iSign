import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import { useAuth, logout } from '../Authentication/authfuncs';


const CoursePage = () => {

  const currentUser = useAuth();
  console.log(currentUser);
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    // setLoading(true);
    try {
      await logout();
    } catch(e){
      alert(e);
    }
    // setLoading(false);
  }

  function name(str){

    const name=str.slice(0, str.indexOf('@'));
  	const newName =name.charAt(0).toUpperCase()+name.slice(1);

    return newName;
  }

  return (
    <div className="course-page-container">
      <div className="profile-wrapper">
        <div className="profile-pic">
            <img src="/images/icons/profile-5.png" alt="Profile Pic" />
          </div>
          <h1 className="email_tagline">{name(`${currentUser?.email}`)}</h1>
          <div className="profile-nav">
            <div className="profile-nav-item-wrapper">
              <div className="profile-nav-item">
                <img src="/images/icons/course-icon.png" alt="Course Icon" />
                <p>My courses</p>
              </div>
            </div>
            {/* <div className="profile-nav-item-wrapper"> */}
              <div className="profile-nav-item">
                <img src="/images/icons/sign-out-icon.png" alt="Sign Out Icon" />
                <p className="signIn_orUp"  onClick={handleLogout}>
                  <Link to="/"> Sign out</Link>
                  </p>
              </div>
            {/* </div> */}
          </div>
      </div>
      <div className="course-list-wrapper">
        <div className="course-page-main-header">
          <h1>Welcome back {name(`${currentUser?.email}`)}!</h1>
          <p>What would you like to learn today?</p>
        </div>

        <div className="course-options">
              <div className="course-wrapper">
                <Link to="/learning">
                  <div className="course-item alphabet-course">
                    <h1>The alphabet</h1>
                    {/* <p>6 lessons | 2 quizzes</p> */}
                    <img src="/images/icons/alphabet-img.png" alt="Alphabet Course Icon" />

                  </div>
                </Link>
              </div>
            <div className="course-wrapper">
                <img className="lock-icon" src="/images/icons/lock-icon.png" alt="Locked Icon" />
                <h5><span>Course </span>coming soon</h5>
                <div className="course-item  numbers-course">
                  <h1>Numbers</h1>
                  {/* <p>5 lessons | 2 quizzes</p> */}
                  <img src="/images/icons/number-img.png" alt="Numbers Course Icon" />
                </div>
            </div>
            <div className="course-wrapper">
              <img className="lock-icon" src="/images/icons/lock-icon.png" alt="Locked Icon" />
              <h5><span>Course </span>coming soon</h5>
              <div className="course-item colors-course">
                <h1>Colors</h1>
                {/* <p>5 lessons | 2 quizzes</p> */}
                <img src="/images/icons/colors-img.png" alt="Colors Course Icon" />
              </div>
            </div>
            <div className="course-wrapper">
              <img className="lock-icon" src="/images/icons/lock-icon.png" alt="Locked Icon" />
                <h5><span>Course </span>coming soon</h5>
                <div className="course-item greetings-course">
                  <h1>Greetings</h1>
                  {/* <p>5 lessons | 2 quizzes</p> */}
                  <img src="/images/icons/greetings-img.png" alt="Greetings Course Icon" />
                </div>
            </div>
            <div className="course-wrapper">
              <img className="lock-icon" src="/images/icons/lock-icon.png" alt="Locked Icon" />
                <h5><span>Course </span>coming soon</h5>
                <div className="course-item questions-course">
                  <h1>Questions</h1>
                  {/* <p>5 lessons | 2 quizzes</p> */}
                  <img src="/images/icons/questions-img.png" alt="Questions Course Icon" />
                </div>
            </div>
            <div className="course-wrapper">
              <img className="lock-icon" src="/images/icons/lock-icon.png" alt="Locked Icon" />
              <h5><span>Course </span>coming soon</h5>
              <div className="course-item phrases-course">
                <h1>Phrases</h1>
                {/* <p>5 lessons | 2 quizzes</p> */}
                <img src="/images/icons/phrases-img.png" alt="Phrases Course Icon" />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default CoursePage
