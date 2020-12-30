const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1/links', (err, db) => {
//     console.log(err);
//     console.log(db);
// })

// mongoose.connect('mongodb://127.0.0.1/links').then(db => {
//     console.log(db);
// }).catch(err => {
//     console.log(err);
// })

mongoose.connect('mongodb://localhost/links', { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.on("error", () => {
    console.log("houve um erro");
})
db.once("open", () => {
    console.log("Banco carregado");
})



app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(port, () => {
    console.log(`Server running on port ${3000}`);
})