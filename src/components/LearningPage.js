import React, { useRef, useEffect } from "react";
import { Hands } from "@mediapipe/hands";
import * as Camera from "@mediapipe/camera_utils";
// import Webcam from "react-webcam";

function LearningPage() {

  const letters=["https://drive.google.com/uc?export=view&id=1NH1QACDqwUZTYg73Y5tW_a5v2Bq-EyYK",
]

  const isCorrect=true;

  function changeLetter(){
    let i=0;
    isCorrect ? letters[i+1] : letters[i];
}

  return (
   <div className="learning-page-container">
     <div className="learning-page-content-wrapper">
       <h1>Lets get started</h1>
       <p>Make sure your hand is in the frame and copy the handshape below.</p>
       <img src={()=>changeLetter} />
     </div>
     <div className="video-wrapper">
       <video id="web_cam_"></video>
       {/* <button id="train_button">Start Training</button> */}
     </div>
   </div>
  )
}

export default LearningPage;
