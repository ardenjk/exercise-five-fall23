const express = require('express');
const app = express();
const firebase = require("firebase/app"); //giving full permission to do anything inside the app 

//port
const port = 4000;

//my unique project config information for firebase
const firebaseConfig = {
  apiKey: "AIzaSyDloSW97Ei2Y_Fl-aSe4u4W8cH6yio52yE",
  authDomain: "exercise-fall-2023.firebaseapp.com",
  projectId: "exercise-fall-2023",
  storageBucket: "exercise-fall-2023.appspot.com",
  messagingSenderId: "416774441166",
  appId: "1:416774441166:web:5b47afb6199555c15c689f"
};

//initialize Firebase
firebase.initializeApp(firebaseConfig);


const indexRoute = require('./routes/index');
const singlePostRoute = require('./routes/singlePost');
// const createPostRoute = require('./routes/index');
  
app.use("/", indexRoute); //requires 2 arg url path and the actual functionality 
app.use("/post", singlePostRoute); //requires 2 arg url path and the actual functionality 
app.use("/create", createPostRoute); 

  app.listen(port, () => {
    console.log(`Exercise Five on port${port}`)
  });

