import React, { useRef, useEffect, useState } from "react";
import mp from "@mediapipe/hands";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { Link } from 'react-router-dom';
// import * as tf from "@tensorflow/tfjs"

function LearningPage(props) {
  let letters= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let letterKey = new Map()

  const canvasRef = useRef(null)
  const videoRef = useRef(null)
  let model;

  //initialize new media pipe hands object.
  const hands = new mp.Hands({
    locateFile: file => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    }
  })

  //set an initial letterIndex corresponding to which letter the user
  //is on in the lesson

  const [ letterIdx, setLetterIdx ] = useState(0);
 
  const images_arr = [
    "https://drive.google.com/uc?export=view&id=1NH1QACDqwUZTYg73Y5tW_a5v2Bq-EyYK",
    "https://drive.google.com/uc?export=view&id=1fAbMh20lCKr2oS7F4vGOvb0LMumS1UTl",
    "https://drive.google.com/uc?export=view&id=1DArGFqFNzgE4TH8UUJAfYyYtpmB455Je",
    "https://drive.google.com/uc?export=view&id=1Z-5PGdiYloH9lqTB8RjihVEEeorRr4Ee",
    "https://drive.google.com/uc?export=view&id=1VnRmsymQmK3hzefGh3pD-C4Ha4m5kC8W"
  ];

 // increment the letter index until it has reached the length of the array.
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

 /* takes the handpoints captured from mediapipe and flattens the array of objects
 [{x:0.3, y:0.5, z: -0.1}, {x:0.8, y:0.2, z: 0.7}] to [0.3,0.5,-0.1, 0.8, 0.2, 0.7] 
 then converts those values into a 2dtensor 
 */
 function convertLandMarks(landmark){
    let values = landmark.reduce(function (previousValue, currentValue) {
      previousValue.push(currentValue.x, currentValue.y, currentValue.z);
      return previousValue;
    }, []);
    let tensorValues = tf.tensor2d(values, [1, 63])
    makePrediction(tensorValues)
 } 

/* Our model makes a prediction based on the handlandmark tensor values and outputs a tenseor of probabilities.
that tensor is converted back into an array and passed to the getLetters func
*/
async function makePrediction(values){
  let preds = await model.predict(values)
  const p = preds.dataSync();
  let predictionArr = Array.from(p);
  getLetters(predictionArr)
}

/* gets the maximum probability from array + its index then finds the corresponding letter */
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

  /*
  checks if the hand is in the screen and outputs the landmark points for a visible hand
  */
  function onResults(results) {
    const videoWidth = videoRef.current.video.videoWidth
    const videoHeight = videoRef.current.video.videoHeight
    if (results.multiHandLandmarks.length > 0) {
      let landMark = results.multiHandLandmarks[0]
      convertLandMarks(landMark)
  }
}
/* passes in the react webcam reference on mount and continuously sends the stream to mediapipe */
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

  /* loads our tensor flow model and assigns it to a model variable defined above */
  async function getModel(){
    model = await loadModel()
      return model
  }

 function startLesson(){
  setLettersArr()
   getModel()
   setMapValues()
  hands.onResults(onResults)
 }


 return (
  <div className="learning-page-container">
    <div className="back-bttn">
        <Link to="/alphabet-lesson">
          <img src="https://drive.google.com/uc?export=view&id=16ORv_43yS04SQLquK8vike9O0rTlJMWW" />
        </Link>
      </div>
    <div className="learning-page-content-wrapper">
      <h1>Lets get started</h1>
      <p>Make sure your right hand is in the frame and copy the handshape below.</p>
      {/* <p>Click start lesson to begin </p> */}
      {/* <button style={{margin:0, marginBottom:'20px'}}onClick={() => nextLetter()}id="train_button">Next Letter</button> */}
      <img src={ getImageUrl() } />
      <button onClick={() =>startLesson()}id="train_button">Start Lesson</button>

    </div>

    <div className="video-wrapper">
      <Webcam mirrored={true} height={"inherit"} width={"inherit"} style={{ height: "90%", width: "95%" }} autoPlay id="web_cam_" ref={videoRef} className="app__videoFeed" />
    </div>
  </div>
 )
}

export default LearningPage;
