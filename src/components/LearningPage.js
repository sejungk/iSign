import React, { useRef, useEffect } from "react";
import { Hands } from "@mediapipe/hands";
import * as Camera from "@mediapipe/camera_utils";
// import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs"


function LearningPage() {

  async function getModel(){
    
    let m = await loadModel()
    console.log(m)
    // const model = await tf.loadLayersModel('./public/isign_model.json');
    console.log("Model Here")
   m.summary()
  }



  return (
   <div className="learning-page-container">
     <div className="learning-page-content-wrapper">
       <h1>Lets get started</h1>
       <p>Make sure your hand is in the frame and copy the handshape below.</p>
       <img src="https://drive.google.com/uc?export=view&id=1NH1QACDqwUZTYg73Y5tW_a5v2Bq-EyYK" />
     </div>
     <div className="video-wrapper">
       <video id="web_cam_"></video>
     <button onClick={() =>getModel()}id="train_button">Start Training</button> 
     </div>
   </div>
  )
}

export default LearningPage;
