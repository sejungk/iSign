import React, { useRef, useEffect, useState } from "react";
import mp from "@mediapipe/hands";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs"


function LearningPage(props) {
  let letters= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let letterKey = new Map()
  
  const canvasRef = useRef(null)
  const videoRef = useRef(null)
  let [letterArr, setLetterArr] = useState([])
  // let [indexCounter, incrementCounter] = useState(0)
  let model;
  const hands = new mp.Hands({
    locateFile: file => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    }
  })


  const [ letterIdx, setLetterIdx ] = useState(0);
  const images_arr = [
    "https://drive.google.com/uc?export=view&id=1NH1QACDqwUZTYg73Y5tW_a5v2Bq-EyYK",
    "https://drive.google.com/uc?export=view&id=1fAbMh20lCKr2oS7F4vGOvb0LMumS1UTl",
    "https://drive.google.com/uc?export=view&id=1DArGFqFNzgE4TH8UUJAfYyYtpmB455Je",
    "https://drive.google.com/uc?export=view&id=1Z-5PGdiYloH9lqTB8RjihVEEeorRr4Ee",
    "https://drive.google.com/uc?export=view&id=1VnRmsymQmK3hzefGh3pD-C4Ha4m5kC8W"
  ];

  function nextLetter() {
    if (letterIdx < images_arr.length) {
      setLetterIdx(letterIdx + 1)
    } else {
      alert("Congratulations! You finished this lesson!")
    }
  }

  function getImageUrl() {
    return images_arr[letterIdx]
  }










 function setLettersArr(){
  let arr = props.location.letters.letterArr
  console.log(arr)
 }

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
}

 function getLetters(arr) {
  const max = Math.max(...arr);
  const index =arr.indexOf(max);
  let answer = letterKey.get(index)
  console.log(answer)
  if(max > 0.90){
    // alert(answer)
    alert("correct!")
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
      console.log(landMark)
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
      return model
  }
 function startLesson(){
  //  console.log("props", props.location.letters)
  setLettersArr()
   getModel()
   setMapValues()
  hands.onResults(onResults)
 
 }

let camSet = true
 return (
  <div className="learning-page-container">
    <div className="learning-page-content-wrapper">
      <h1>Lets get started</h1>
      <p>Make sure your right hand is in the frame and copy the handshape below.</p>
      <p>Click start lesson to begin </p>
      <button style={{margin:0, marginBottom:'20px'}}onClick={() => nextLetter()}id="train_button">Next Letter</button>
      <img src={ getImageUrl() } />
      <button onClick={() =>startLesson()}id="train_button">Start Lesson</button> 
     
    </div>
   
    <div className="video-wrapper">
      <Webcam mirrored={true} autoPlay  id="web_cam_" ref={videoRef} className="app__videoFeed" />
    </div>
  </div>
 )
}

export default LearningPage;
