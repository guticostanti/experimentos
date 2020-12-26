// variáveis gerais
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");



// Estilo das linhas
/*
ctx.lineWidth = 5
ctx.strokeStyle = "red"*/

// Desenhando triângulo
/*
ctx.moveTo(0,0);
ctx.lineTo(250,250);
ctx.lineTo(500, 0);
ctx.stroke(); */

// Desenhando retângulo preenchido
/*
ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 200) */

// Desenhando retângulo não preenchido
/*
ctx.strokeStyle = "red";
ctx.strokeRect(10, 10, 100, 200) */

// Retângulo preenchido com borda
/*
ctx.rect(10, 10, 100, 200);
ctx.fillStyle = "blue";
ctx.strokeStyle = "red";
ctx.fill();
ctx.stroke(); */

// criando transparência em uma área preenchida
/*ctx.clearRect(20, 20, 30, 30);*/

// PATH - Criando duas linhas
/*
ctx.beginPath();

ctx.lineWidth = 5;
ctx.strokeStyle = "red";
ctx.moveTo(10, 10);
ctx.lineTo(400, 300)
ctx.stroke();

ctx.beginPath();

ctx.lineWidth = 7;
ctx.strokeStyle = "brown";
ctx.moveTo(50, 10);
ctx.lineTo(300, 300);
ctx.lineTo(200, 300);
ctx.closePath();
ctx.stroke();*/

// Desenhando circulos
let x = 250;
let y = 250;
let raio = 100;
let inicio = 0;
let fim = 2 * Math.PI;
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4
ctx.arc(x, y, raio, inicio, fim);
ctx.stroke();