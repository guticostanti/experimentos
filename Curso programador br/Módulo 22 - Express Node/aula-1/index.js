const express = require('express');
const path = require('path');

const app = express();


app.use("/meusite", express.static(path.join(__dirname, 'client')));

app.get("/", (req, res) => {
    // Types COMUNS
    /*
        res.type('html')
        res.type('json')
        res.type('png')
        res.type('txt')
    */

    // res.set("Content-Type", "text/html")
    res.type("html");
    res.send("<h1>Hello world from get</h1>");

})

const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server Running on Port: " + PORT);
})