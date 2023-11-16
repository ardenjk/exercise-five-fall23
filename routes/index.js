//YOU ARE INSIDE ROUTES FOLDER

const express = require('express')
const router = express.Router(); //create instance of router 

//Initialize firestore database 
const firestore = require("firebase/firestore");

//Create a reference to the database 
const db = firestore.getFirestore();


//Define index route - get all posts 
router.get('/', (req, res) => {

const postsQuery = firestore.getDocs(firestore.collection(db, "posts"));
const postsArray = [];


postsQuery
.then((response) => {
    response.forEach((post) => {
        console.log(post.data());
        postsArray.push({id:post.id, ...post.data() });

        });
    })
    .catch((error) => {
        console.log(error);
        return res.send(error);
    })
});

module.exports = router; 

//if somebody accesses this file and they try to import from this router is the router 