// Load our saved model from current directory (which will be 
// hosted via Firebase Hosting)
async function loadModel() {
    // Relative URL provided for my-model.json.
    console.log("model is here")
    const model = await tf.loadLayersModel('./isign_model.json');
    // Once model is loaded, let's try using it to make a prediction!
    // Print to developer console for now.
  
    return model
  }
  
loadModel()