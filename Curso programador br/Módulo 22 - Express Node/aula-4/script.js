var express = require('express');
var app = express();
var bodyParser = require("body-parser");

let alunos = [
    { id: 0, nome: "Jose" },
    { id: 1, nome: "Maria" },
    { id: 2, nome: "Joao" },
    { id: 3, nome: "Marcos" }
];

app.use(bodyParser.urlencoded());

app.get("/", (req, res) => {
    res.send("Olá, mundo");
});

app.get("/alunos", (req, res) => {
    res.json(JSON.stringify(alunos));
});

app.get("/aluno", (req, res) => {
    console.log(req.body);
    let aluno = alunos[req.body.id]
    res.json(aluno);
})

app.get("/aluno/:id", (req, res) => {
    console.log(req.params.id);
    let aluno = alunos[req.params.id];
    res.json(aluno);
})

app.listen(5000, () => {
    console.log("Server running on port 5000");
});