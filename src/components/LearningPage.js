import React, { useRef, useEffect } from "react";
import { Hands } from "@mediapipe/hands";
import * as Camera from "@mediapipe/camera_utils";
// import Webcam from "react-webcam";
// import * as tf from "@tensorflow/tfjs"


function LearningPage() {

  // async function getModel(){
    
  //   let model = await loadModel()

  //   let arr = [
  //     '0.5050752759', '0.8191810846', '-5.67E-08',
  //     '0.5413086414', '0.7822226882', '0.005098316353',
  //     '0.5650013685', '0.730843842',  '0.003960532602',
  //     '0.5816333294', '0.6954370141', '-0.001839852543',
  //     '0.5953506231', '0.6625803113', '-0.006068183575',
  //     '0.541462481',  '0.6422476768', '0.01379237976',
  //     '0.5761112571', '0.631667614',  '0.000315206853',
  //     '0.5885055661', '0.6586486101', '-0.01060774084',
  //     '0.5897630453', '0.6741392612', '-0.01666434295',
  //     '0.5319131613', '0.6419063807', '0.004015539307',
  //     '0.574331522',  '0.6495622993', '-0.006797755603',
  //     '0.5766147375', '0.6875853539', '-0.01214794815',
  //     '0.5667145252', '0.7039731145', '-0.01433666423',
  //     '0.5242192745', '0.6476883888', '-0.0075157471',
  //     '0.5671383739', '0.6678875089', '-0.01806558669',
  //     '0.5633444786', '0.705190897',  '-0.01411663368',
  //     '0.5509762168', '0.7205718756', '-0.009397579357',
  //     '0.5173133612', '0.6618361473', '-0.01942050271',
  //     '0.5551881194', '0.6798210144', '-0.02392531931',
  //     '0.5534206033', '0.7124384642', '-0.01709282398',
  //     '0.5422443748', '0.7269453406', '-0.01042824239']
   
  //     let numArr = arr.map(Number)
  //     let tensorValue = await tf.tensor2d(numArr, [1, 63])
  //     // tensorValue.print()
  //     // model.summary()
    
  
  //     let prediction = await model.predict(tensorValue)
  //     prediction.print()
  
  // }



  return (
   <div className="learning-page-container">
     <div className="learning-page-content-wrapper">
       <h1>Lets get started</h1>
       <p>Make sure your hand is in the frame and copy the handshape below.</p>
       <img src={"https://drive.google.com/uc?export=view&id=1NH1QACDqwUZTYg73Y5tW_a5v2Bq-EyYK"} /> 
     </div>
     <div className="video-wrapper">
       <video id="web_cam_"></video>
     {/* <button onClick={() =>getModel()}id="train_button">Start Training</button>  */}
     </div>
   </div>
  )
}

export default LearningPage;
