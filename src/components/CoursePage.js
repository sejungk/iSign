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
            <img src="https://drive.google.com/uc?export=view&id=1-QO80c6b1RfU_NHTmV5CJH4x2BTUCXrW" />

          </div>
          <h1 className="email_tagline">{name(`${currentUser?.email}`)}</h1>
          <div className="profile-nav">
            <div className="profile-nav-item-wrapper">
              <div className="profile-nav-item">
                <img src="https://drive.google.com/uc?export=view&id=1bEB1JyRKg1w6pBsnamyfhHlkwPE2ln8M" />
                <p>My courses</p>
              </div>
            </div>
            {/* <div className="profile-nav-item-wrapper"> */}
              <div className="profile-nav-item">

                <img src="https://drive.google.com/uc?export=view&id=1y3A1SeM99ZG5wrNucqv3tibgIDinoSnt" />

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
                <Link to="/alphabet-lesson">
                  <div className="course-item alphabet-course">
                    <h1>The alphabet</h1>
                    {/* <p>6 lessons | 2 quizzes</p> */}
                    <img src="https://drive.google.com/uc?export=view&id=1bzlRbUWKXQFP4T39u1n-OGOAz9dajhzx"/>
                  </div>
                </Link>
              </div>
            <div className="course-wrapper">
                <img className="lock-icon" src="https://drive.google.com/uc?export=view&id=1McUUcvTct9-_NKWli101wYtYM6RjUhlR" />
                <h5><span>Course </span>coming soon</h5>
                <div className="course-item  numbers-course">
                  <h1>Numbers</h1>
                  {/* <p>5 lessons | 2 quizzes</p> */}
                  <img src="https://drive.google.com/uc?export=view&id=1vA3K8DbU4gNeaeKwlaOc2b_j2iibFQcl"/>
                </div>
            </div>
            <div className="course-wrapper">
              <img className="lock-icon" src="https://drive.google.com/uc?export=view&id=1McUUcvTct9-_NKWli101wYtYM6RjUhlR" />
              <h5><span>Course </span>coming soon</h5>
              <div className="course-item colors-course">
                <h1>Colors</h1>
                {/* <p>5 lessons | 2 quizzes</p> */}
                <img src="https://drive.google.com/uc?export=view&id=1HhrvBIyI0fHABfdKZD_KknRD3ZxiA4Kz"/>
              </div>
            </div>
            <div className="course-wrapper">
                <img className="lock-icon" src="https://drive.google.com/uc?export=view&id=1McUUcvTct9-_NKWli101wYtYM6RjUhlR" />
                <h5><span>Course </span>coming soon</h5>
                <div className="course-item greetings-course">
                  <h1>Greetings</h1>
                  {/* <p>5 lessons | 2 quizzes</p> */}
                  <img src="https://drive.google.com/uc?export=view&id=1M2gbXjg5uuPe0AYgRwto9f6htuoI1uep"/>
                </div>
            </div>
            <div className="course-wrapper">
                <img className="lock-icon" src="https://drive.google.com/uc?export=view&id=1McUUcvTct9-_NKWli101wYtYM6RjUhlR" />
                <h5><span>Course </span>coming soon</h5>
                <div className="course-item questions-course">
                  <h1>Questions</h1>
                  {/* <p>5 lessons | 2 quizzes</p> */}
                  <img src="https://drive.google.com/uc?export=view&id=1eV5F-tloYQJDmZV8M1BslEne9OVFyQKW"/>
                </div>
            </div>
            <div className="course-wrapper">
              <img className="lock-icon" src="https://drive.google.com/uc?export=view&id=1McUUcvTct9-_NKWli101wYtYM6RjUhlR" />
              <h5><span>Course </span>coming soon</h5>
              <div className="course-item phrases-course">
                <h1>Phrases</h1>
                {/* <p>5 lessons | 2 quizzes</p> */}
                <img src="https://drive.google.com/uc?export=view&id=1UGBOzgVo0bXOBf1K323b5aXXDtQJCpHk"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default CoursePage
