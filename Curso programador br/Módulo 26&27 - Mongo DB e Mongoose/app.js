const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    url: { type: String, required: true },
    click: { type: Number, default: 0 }
});

// Modelo
const Link = mongoose.model('Link', linkSchema);

// Documento
const link = new Link({
    title: "progbr",
    description: "Link para o twitter",
    url: "https://twitter.com/progbr"
});

link.save().then(doc => {
    console.log(doc);
}).catch(err => {
    console.log(err);
})

// mongoose.connect('mongodb://127.0.0.1/links', (err, db) => {
//     console.log(err);
//     console.log(db);
// })

// mongoose.connect('mongodb://127.0.0.1/links').then(db => {
//     console.log(db);
// }).catch(err => {
//     console.log(err);
// })

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Person = mongoose.model('Person', personSchema);

let person = new Person({
    name: "José",
    age: 23
});

person.save().then(doc => {
    console.log(doc);
}).catch(err => {
    console.log(err);
})

mongoose.connect('mongodb://localhost/newlinks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

db.on("error", () => {
    console.log("houve um erro");
});
db.once("open", () => {
    console.log("Banco carregado");
});








app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(port, () => {
    console.log(`Server running on port ${3000}`);
})