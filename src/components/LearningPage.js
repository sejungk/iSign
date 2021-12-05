import React, { useRef, useEffect } from "react";
import { Hands } from "@mediapipe/hands";
import * as Camera from "@mediapipe/camera_utils";
// import Webcam from "react-webcam";

function LearningPage() {

  const body = document.body;
  const webcamRef = useRef(null);
  // let camera = null;

  const videoRef = document.querySelector("video");
  // let startButton = document.getElementById("train_button");
  // startButton.addEventListener("click", start);
  // const DataClass = new CaptureData([], {});
  // let stopVidTimeOut;
  // let currentClass;

  // const hands = new Hands()
  // // const hands = new Hands({
  // //   locateFile: (file) => {
  // //     return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
  // //   },
  // // });
  // hands.setOptions({
  //   maxNumHands: 2,
  //   modelComplexity: 1,
  //   minDetectionConfidence: 0.5,
  //   minTrackingConfidence: 0.5,
  // });

  // function start(event) {
  //   startButton.remove();
  //   getMedia(videoRef);
  //   let labels = prompt("Enter Labels:");
  //   DataClass.makeLabels(labels);
  //   createLabelButtons(DataClass.labels);
  //   console.log(DataClass);
  // }

  // function createLabelButtons(labels) {
  //   for (let key in labels) {
  //     let captureButton = document.createElement("button");
  //     captureButton.innerHTML = `Train Label ${key}`;
  //     captureButton.setAttribute("id", key);
  //     captureButton.classList.add("training_buttons");
  //     captureButton.onclick = function (e) {
  //     setClass(this.id);
  //     collectData()
  //     };
  //     body.append(captureButton);
  //   }
  //   let stopButton = document.createElement("button");
  //   stopButton.innerHTML="stop"
  //   stopButton.addEventListener('click', stopCollection)
  //   body.append(stopButton)
  // }

  // function stopCollection(){
  //     console.log("stopped")
  //     console.log("Length of DataSet:",DataClass.dataSet.length)
  //     console.log(DataClass.dataSet)
  //     console.log("labels", DataClass.labels)
  //     let df = new dfd.DataFrame(DataClass.dataSet)
  //     df.print()
  //     dfd.to_csv(df, { fileName: "A_D_Lauren.csv", download: true});

  // }

  // async function getMedia(video) {
  //   let constraints = { audio: false, video: { width: 640, height: 400 } };

  //   navigator.mediaDevices
  //     .getUserMedia(constraints)
  //     .then(function (mediaStream) {
  //       video.srcObject = mediaStream;
  //       video.onloadedmetadata = function (e) {
  //         video.play();
  //       };
  //     })
  //     .catch(function (err) {
  //       console.log(err.name + ": " + err.message);
  //     });
  // }

  // //mediaPipe

  // function onResults(results) {
  //     let landMarks = results.multiHandLandmarks
  //     if (landMarks.length > 0 ) {
  //             DataClass.addFramesToData(landMarks[0], currentClass);
  //             console.log(landMarks[0])


  //       }
  //     //   console.log(DataClass.dataSet)
  // }


  // const camera = new Camera(videoRef, {
  //   onFrame: async () => {
  //     await hands.send({ image: videoRef });
  //   },
  //   width: 640,
  //   height: 400,
  // });

  // function runCamera() {
  //   camera.start();
  // }
  // function stopStreamedVideo(videoElem) {
  //   const stream = videoElem.srcObject;
  //   const tracks = stream.getTracks() || null;

  //   tracks.forEach(function (track) {
  //     track.stop();
  //   });

  //   videoElem.srcObject = null;
  // }

  // function setClass(buttonId){
  //     currentClass = buttonId
  // }

  // function collectData() {
  //   hands.onResults(onResults);
  // }

  // runCamera();

  return (
   <div className="learning-page-container">
     <div className="learning-page-content-wrapper">
       <h1>Lets get started</h1>
       <p>Make sure your hand is in the frame and copy the handshape below.</p>
       <img src="https://drive.google.com/uc?export=view&id=1NH1QACDqwUZTYg73Y5tW_a5v2Bq-EyYK" />
     </div>
     <div className="video-wrapper">
       <video id="web_cam_"></video>
       {/* <button id="train_button">Start Training</button> */}
     </div>
   </div>
  )
}

export default LearningPage;
