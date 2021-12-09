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
    "https://drive.google.com/uc?export=view&id=1VnRmsymQmK3hzefGh3pD-C4Ha4m5kC8W",
    // ----------  f-j  ---------- //
    "https://drive.google.com/uc?export=view&id=1txS34gCt-zhOpwCp3k63xk-evOz9hlIZ",
    "https://drive.google.com/uc?export=view&id=1c6DkW1_qjyhLpU5H8TaJI1MCpXscJ0Nd",
    "https://drive.google.com/uc?export=view&id=1APMO-TSHaIdCJtAqnwlPJH4JdR93TK51",
    "https://drive.google.com/uc?export=view&id=1MmRYVXe1tKM-hn64TnH-dOPmGnEu0u-d",
    "https://drive.google.com/uc?export=view&id=1QYVYUURyssbcMfgANZjaKKvbUZSrb9yM",
    // ----------  k-o  ---------- //
    "https://drive.google.com/uc?export=view&id=1dKSKwjnQxw84_F2AxabUzqcoS9gohW_M",
    "https://drive.google.com/uc?export=view&id=1dcQ612e83F7YEhOQXNZwDNTr7YwF6VNd",
    "https://drive.google.com/uc?export=view&id=1KH-rX6bfoWmLlWFRgSCIIsnZ2gKn6tew",
    "https://drive.google.com/uc?export=view&id=1ROr7d-2-snjCOSrm5-RZ9ZGJphJBvlOu",
    "https://drive.google.com/uc?export=view&id=1fy_LyAPg4pjUKPAskhHzxFS4god5iPLq",
    // ----------  p-t  ---------- //
    "https://drive.google.com/uc?export=view&id=1CFAP426Nqaa_wk65X0bFId1rIVgFdDRI",
    "https://drive.google.com/uc?export=view&id=1kMa3N88K08gIYSe2OQOpt0x7M2jj-lFN",
    "https://drive.google.com/uc?export=view&id=1_Yb_e9HSj4aTHRiFZRl3Jm6vCUOPjbtl",
    "https://drive.google.com/uc?export=view&id=1cviHJCTMSUPL_StLja4p6ZNG2UgIh378",
    "https://drive.google.com/uc?export=view&id=1hnPrG9er_lAw-pnYDFy4BlCffD0ILISh",
    // ----------  u-z  ---------- //
    "https://drive.google.com/uc?export=view&id=1KuibwOfSW788ZwdWop8BS-5p9PP1VMCq",
    "https://drive.google.com/uc?export=view&id=1Nx2hdCCIMICCx3LcTSuIWu_3TmlAKHs0",
    "https://drive.google.com/uc?export=view&id=1No8RKHkb1t327PSauQETJueT7OzIDJam",
    "https://drive.google.com/uc?export=view&id=1wiJB0k7h0Yj0PST3V7Wm_aALt-PBIsks",
    "https://drive.google.com/uc?export=view&id=1R_memLrdPgNgliRLc1iaiCbHtezX3cGa",
    "https://drive.google.com/uc?export=view&id=1Uss-sPF5hylo4wEF46x6p9juD3PIm29O"
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
  const index = arr.indexOf(max);
  let answer = letterKey.get(index)
  console.log(answer)
    if(max > 0.90 && answer === index){
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
  document.querySelector(".training-modal-wrapper").style.display = "none";
   setLettersArr()
   getModel()
   setMapValues()
  hands.onResults(onResults)

 }

let camSet = true
 return (
  <div className="learning-page-container">
    <div className="back-bttn">
        <Link to="/alphabet-lesson">
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

      {/* <p>Click start lesson to begin </p> */}
      <button style={{margin:0, marginBottom:'20px'}}onClick={() => nextLetter()}id="train_button">Next Letter</button>
      <p>Copy the handshape below</p>
      <img src={ getImageUrl() } />
    </div>

    <div className="video-wrapper">
      <Webcam mirrored={true} height={"inherit"} width={"inherit"} style={{ height: "90%", width: "95%" }} autoPlay id="web_cam_" ref={videoRef} className="app__videoFeed" />
    </div>
  </div>
 )
}

export default LearningPage;
