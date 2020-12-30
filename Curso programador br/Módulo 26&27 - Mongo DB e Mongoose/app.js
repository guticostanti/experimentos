const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/newlinks', { useNewUrlParser: true, useUnifiedTopology: true })

const linkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    url: { type: String, required: true },
    click: { type: Number, default: 0 }
});


const Link = mongoose.model('Link', linkSchema);


let db = mongoose.connection;

db.on("error", () => {
    console.log("houve um erro");
});
db.once("open", () => {
    console.log("Banco carregado");

    app.get("/:title", async (req, res) => {
        let title = req.params.title;
        try {
            let doc = await Link.findOne({title});
            console.log(doc);
            res.redirect(doc.url);
        } catch (error) {
            res.send(error);
        }
    })
});








app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(port, () => {
    console.log(`Server running on port ${3000}`);
})