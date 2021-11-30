import React from 'react';
import Webcam from 'react-webcam';


export default function Lesson() {
  const webcamRef = React.useRef(null);

  return (
    <div>
        <div className="lesson_name">
          <h1>Lesson 1: A - D</h1>
        </div>

        <h4>Copy the hand position shown below: </h4>

        <div className="symbol">
          <h1>A</h1>
        </div>

        <img className='teachingSignImg' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Sign_language_A.svg/585px-Sign_language_A.svg.png' width="150"></img>

        <div className='video'>
          <Webcam audio={false} height={250} ref={webcamRef} />
        </div>

    </div>
  );
}

// class Lesson extends React.Component {
//   constructor(){
//     super();
//   }

//   render() {
//     const webcamRef = React.useRef(null);

//     return(
//       <div>
//         <div className="lesson_name">
//           <h1>Lesson 1: A - D</h1>
//         </div>

//         <h4>Copy the hand position shown below: </h4>

//         <div className="symbol">
//           <h1>A</h1>
//         </div>

//         <img className='teachingSignImg' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Sign_language_A.svg/585px-Sign_language_A.svg.png' width="150"></img>

//         <div className='video'>
//           <Webcam audio={false} height={250} ref={webcamRef} />
//         </div>

//       </div>
//     );
//   }
// }

// export default Lesson;
