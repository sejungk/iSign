import React, { useRef, useEffect, useState } from "react";
import mp from "@mediapipe/hands";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { Link } from 'react-router-dom';
import { images_arr } from "../../data/images";

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
  let letterIdx = 0;

 // increment the letter index until it has reached the length of the array.
  function nextLetter() {
    
    letterIdx++

    if (letterIdx >= 26){
      document.querySelector(".course-completed-modal-wrapper").style.display = "block";
      return
    }
   
    if (letterIdx % 5 === 0 && letterIdx > 0 && letterIdx < 25) {
      console.log("NEW LESSON")
      document.querySelector(".completed-modal-wrapper").style.display = "block";
    }

    if (letterIdx <= images_arr.length) {
      getImageUrl()
    }
 
  }

  function getImageUrl() {
    document.getElementById('letter-img').src = images_arr[letterIdx]
    console.log(document.getElementById('letter-img').src)
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


function borderColorChange() {
  const webcamDiv = document.getElementById('web_cam_')
  //original color is orange
  const orig = 'solid #ff8717'
  //change to green
  webcamDiv.style.border = '3px solid #17ca35'
  webcamDiv.style.borderRadius = "15px"
  webcamDiv.style.boxShadow = "0px 0px 40px 3px #39ff14"
  window.setTimeout(function() {
    webcamDiv.style.border = orig;
    webcamDiv.style.boxShadow = 'none';
  }, 1000)
}

/* gets the maximum probability from array + its index then finds the corresponding letter */
 function getLetters(arr) {
  const max = Math.max(...arr);
  const index = arr.indexOf(max);
  let answer = letterKey.get(index);
  console.log("max", max)
  console.log("pred & currLetter ",index, letterIdx)


    if(max > 0.85 && letterIdx === index){
      borderColorChange();
      //move to next letter here
      nextLetter();
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
  //  console.log("props", props.location.letters)
  document.getElementById('web_cam_').style.border = 'solid #f4ba19'
  document.querySelector(".training-modal-wrapper").style.display = "none";
   getModel()
   setMapValues()
  hands.onResults(onResults)
 }

 function hideModal() {
  document.querySelector(".completed-modal-wrapper").style.display = "none";
 }


 return (
  <div className="learning-page-container">
    <div className="back-bttn">
        <Link to="/courses">
          <img src="https://drive.google.com/uc?export=view&id=16ORv_43yS04SQLquK8vike9O0rTlJMWW" />
        </Link>
      </div>

    <div className="learning-page-content-wrapper">

      <div className="training-modal-wrapper">
        <div className="training-modal" >
          <h1>Tips to get started</h1>
          <p>Place your right hand in the frame and try to copy the handshape</p>
          <button onClick={() =>startLesson()}id="train_button">Start learning</button>
        </div>
      </div>

      <div className="completed-modal-wrapper">
        <div className="completed-modal">
          <div onClick={() => hideModal()} className="x-bttn">
            <img src = "https://drive.google.com/uc?export=view&id=1chHZvH7I4XgrWqao0w2CxkN9TrFd6ukL" />
          </div>
          <div className="completed-modal-img">
            <img className="completed-modal-img" src="https://drive.google.com/uc?export=view&id=1glNM8wzs2mDoYB8H0VqImPWfLKwfxjkp" />
          </div>
          <div className="completed-modal-text">
            <h2>Congratulations!</h2>
            <p>You've unlocked the next lesson!</p>
            <button id="completed-lesson-bttn" onClick={() => hideModal()}>Start next lesson</button>
          </div>
        </div>
      </div>

      <div className="course-completed-modal-wrapper">
        <div className="completed-modal">
          <div onClick={() => hideModal()} className="x-bttn">
            <img src = "https://drive.google.com/uc?export=view&id=1chHZvH7I4XgrWqao0w2CxkN9TrFd6ukL" />
          </div>
          <div className="completed-modal-img">
            <img className="completed-modal-img" src="https://drive.google.com/uc?export=view&id=1glNM8wzs2mDoYB8H0VqImPWfLKwfxjkp" />
          </div>
          <div className="completed-modal-text">
            <h2>Congratulations!</h2>
            <p>You've completed all the lessons in Alphabet!</p>
          </div>
          <Link to = "/courses">
          <button id="completed-course-bttn" onClick={() => hideModal()}>Return Home</button>
          </Link>
        </div>
      </div>

      {/* <p>Click start lesson to begin </p> */}
      {/* <button style={{margin:0, marginBottom:'20px'}}onClick={() => nextLetter()}id="train_button">Next Letter</button> */}
      <p>Copy the handshape below</p>
      <img id="letter-img" src="https://drive.google.com/uc?export=view&id=1NH1QACDqwUZTYg73Y5tW_a5v2Bq-EyYK" />
    </div>

    <div className="video-wrapper">
      <Webcam mirrored={true} height={"inherit"} width={"inherit"} style={{ height: "90%", width: "95%" }} autoPlay id="web_cam_" ref={videoRef} className="app__videoFeed" />
    </div>
  </div>
 )
}

export default LearningPage;
