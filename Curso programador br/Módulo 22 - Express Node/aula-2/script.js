const express = require('express');
const path = require('path');
const app = express();

app.use("/meusite" ,express.static(path.join(__dirname, "client")));

app.get("/", (req, res) => {
    res.send("<h1>Hello World from GET</h1>");
});

app.post("/", (req, res) =>{
    res.send("<h1>POST aqui</h1>");
})

app.put("/", (req, res) => {
    res.send("<h1>Metodo PUT</h1");
})

app.delete("/", (req, res) => {
    res.send("<h1>Metodo DELETE</h1>");
})


const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});

