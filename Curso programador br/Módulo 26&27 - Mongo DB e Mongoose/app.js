const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/links', (err, db) => {
    console.log(err);
    console.log(db);
})




app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(port, () => {
    console.log(`Server running on port ${3000}`);
})