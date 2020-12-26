var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var aluno = require("./routes/aluno")

// let alunos = [
//     { id: 0, nome: "Jose" },
//     { id: 1, nome: "Maria" },
//     { id: 2, nome: "Joao" },
//     { id: 3, nome: "Marcos" }
// ]

app.use(bodyParser.urlencoded());

app.use("/aluno", aluno);


app.get("/", (req, res) => {
    res.send("Ola, mundo");
});

// app.get("/aluno", (req, res, next) => {
//     console.log(req.body);
//     console.log(req.body);

//     let aluno = alunos[req.body.id];
//     if (aluno) {
//         res.json(aluno);
//     } else {
//         next();
//     }
// });

// app.get("/aluno", (req, res, next) => {
//     console.log(req.query);
    
//     let aluno = alunos[req.query.id];
//     if (aluno) {
//         res.json(aluno);
//     } else {
//         res.send("Aluno não encontrado");
//     }
// });

// app.get("/aluno/all", (req, res) => {
//     res.json(JSON.stringify(alunos));
// });

// app.get("/aluno/:id", (req, res) => {
//     console.log(req.params.id);
//     let aluno = alunos[req.params.id];
//     res.json(aluno);
// });

app.listen(5000, () => {
    console.log('Server running on port 5000');
})