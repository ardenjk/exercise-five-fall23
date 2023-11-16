//Create a post 
const express = require('express');
const router = express.Router();

//Initizlize Firestore Database
const firestore = require("firebase/firestore");

//Create reference to the database
const db = firestore.getFirestore();

const submitForm = `
    <form action="/create/submit">
    <label>Title  
        <input type="text" name="postTitle" />
    </label>
    <label>Text  
        <input type="text" name="postText" />
    </label>
    <label>Author  
        <input type="text" name="author" />
    </label>
    <button type="submit">Submit</button>
</form>
`; 


router.get("/", (req, res) => {
    res.send(submitForm);
});

//submit action and that's when this happens 
router.get("/submit", (req, res) => {
    console.log(req.params)
    res.send(`
        <h1>thanks</h1>
        <p><a href="/create">Submit another post</a>.</p> 
    `);
});


module.exports = router;