import React, { useRef, useEffect, useState } from "react";
import mp from "@mediapipe/hands";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs"


function LearningPage() {
  let letters= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let letterKey = new Map()

  const canvasRef = useRef(null)
  const videoRef = useRef(null)
  let [loaded, setloaded] = useState(false)
  let model;
  const hands = new mp.Hands({
    locateFile: file => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    }
  })



 function convertLandMarks(landmark){

    let values = landmark.reduce(function (previousValue, currentValue) {
      previousValue.push(currentValue.x, currentValue.y, currentValue.z);
      return previousValue;
    }, []);
    makePrediction(values)
 }  
async function makePrediction(values){
  let tensorValue = tf.tensor2d(values, [1, 63])

  let preds = await model.predict(tensorValue)
  const p = preds.dataSync();
  let predictionArr = Array.from(p);
  getLetters(predictionArr)
  // tf.max(preds).print()
}

 function getLetters(arr) {
  const max = Math.max(...arr);
  const index =arr.indexOf(max);
  let answer = letterKey.get(index)
  
  if(max > 0.90){
    
    console.log(answer)
  }
 
  }
  function setMapValues(){
    for(let i = 0; i < letters.length; i++){
      letterKey.set(i,letters[i])
    }
    console.log(letterKey)
  }

  function onResults(results) {
    const videoWidth = videoRef.current.video.videoWidth
    const videoHeight = videoRef.current.video.videoHeight
    if (results.multiHandLandmarks.length > 0) {
      let landMark = results.multiHandLandmarks[0]
      convertLandMarks(landMark)
  }
}

  let camera = null
  useEffect(() => {   

    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7
    })
  

    if (typeof videoRef.current !== 'undefined' && videoRef.current !== null) {
      camera = new cam.Camera(videoRef.current.video, {
        onFrame: async () => {
          await hands.send({image: videoRef.current.video})
        },
        width: 640,
        height: 480
      })
      camera.start()
    }
  }, [])


  async function getModel(){
    model = await loadModel()
    
      // let numArr = arr.map(Number)
      // let tensorValue = await tf.tensor2d(numArr, [1, 63])
      // // tensorValue.print()
      // // model.summary()
      // let prediction = await model.predict(tensorValue)
      // prediction.print()
      return model
  }
 function startLesson(){
   getModel()
   setMapValues()
  hands.onResults(onResults)
 
 }


  return (
   <div className="learning-page-container">
     <div className="learning-page-content-wrapper">
       <h1>Lets get started</h1>
       <p>Make sure your hand is in the frame and copy the handshape below.</p>
       <img src="https://drive.google.com/uc?export=view&id=1NH1QACDqwUZTYg73Y5tW_a5v2Bq-EyYK" />
       <button onClick={() =>startLesson()}id="train_button">Start Training</button> 
     </div>
    
     <div className="video-wrapper">
       <Webcam autoPlay  id="web_cam_" ref={videoRef} className="app__videoFeed" />
     </div>
   </div>
  )
}

export default LearningPage;
