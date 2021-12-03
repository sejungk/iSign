import React from 'react';

const CoursePage = () => {
  return (
    <div className="course-page-container">
      <div className="profile-wrapper">
        <div className="profile-pic">
            <img src="https://drive.google.com/uc?export=view&id=1-QO80c6b1RfU_NHTmV5CJH4x2BTUCXrW" />
          </div>
          <div className="profile-nav">
            <div className="my-courses">
              <img src="" />
              <div className="my-courses-text">My courses</div>
            </div>
            <div className="sign-out">
              <img src="" />
              <div className="sign-out-text">Sign out</div>
            </div>
          </div>
      </div>
      <div className="course-list-wrapper">
        <div className="course-page-main-header">
          <h1>Welcome back!</h1>
          <p>What would you like to learn today?</p>
        </div>
        <div className="course-options">
          <div className="alphabet-course course-item">
            <h1>The alphabet</h1>
            <p>5 lessons | 2 quizzes</p>
            <img src=""/>
          </div>
          <div className="numbers-course course-item">
            <h1>Numbers</h1>
            <p>5 lessons | 2 quizzes</p>
            <img src=""/>
          </div>
          <div className="colors-course course-item">
            <h1>Colors</h1>
            <p>5 lessons | 2 quizzes</p>
            <img src=""/>
          </div>
          <div className="alphabet-course course-item">
            <h1>The alphabet</h1>
            <p>5 lessons | 2 quizzes</p>
            <img src=""/>
          </div>
          <div className="numbers-course course-item">
            <h1>Numbers</h1>
            <p>5 lessons | 2 quizzes</p>
            <img src=""/>
          </div>
          <div className="colors-course course-item">
            <h1>Colors</h1>
            <p>5 lessons | 2 quizzes</p>
            <img src=""/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CoursePage
