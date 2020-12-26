var express = require('express');
var app = express();
var bodyParser = require("body-parser");

let consoleBody = (req, res, next) => {
    console.log(req.body);
    next();
}

let hello = (req, res) => {
    res.send("ola, mundo");
}

app.use("/", bodyParser.json());
app.use("/", consoleBody);
app.get("/", hello);

app.post("/", hello);

app.listen(5000, () => {
    console.log('Server running on port 5000');
})