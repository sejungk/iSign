// import * as tf from "@tensorflow/tfjs"
// import { loadLayersModel } from "@tensorflow/tfjs-converter";
// import {firebaseApp} from '../firebase'
// import { getStorage, ref, getDownloadURL } from "firebase/storage";
// import React, {useState} from 'react'

// // Create a reference to the file we want to download
// const storage = getStorage(firebaseApp);
// const modelRef = ref(storage, 'Model/isign_model.json');


//   // Get the download URL
//   async function getModelFromStorage(){
//     let url = await getDownloadURL(modelRef)
  
//    let loadedModel = await loadTFModel(url)
//    return loadedModel
//   }
  
  
//   async function loadTFModel(url) {
//     try {
//     // For layered model
//     const model = await tf.loadLayersModel(url);
//     // For graph model
//     // const model = await tf.loadGraphModel(url);
    
//     console.log("Load model success")
//     }
//     catch (err) {
//     console.log(err);
//     }
//     }
    
  
    
  
    
    


//     export default getModelFromStorage()

     
