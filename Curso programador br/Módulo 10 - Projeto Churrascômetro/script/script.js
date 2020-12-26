// carne - 400g por pessoa .... + de 6 horas - 650g
// cerveja - 1200ml por pessoa ... + de 6 horas - 2000ml
// Refrigerante/agua - 1000ml por pessoa ... + de 6 horas 1500ml
// criança 0,5 e não bebe breja

// variáveis pra colher resultado
let carne = 0;
let cerveja = 0;
let refri = 0;

// variáveis pra facilitar o trampo
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");
let calculando = document.getElementById("calc");




function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    if (duracao <= 6) {
        carne = (400 * adultos) + (200 * criancas);
        cerveja = 1200 * adultos;
        refri = (1000 * adultos) + (500 * criancas);
    } else if (duracao > 6) {
        carne = (650 * adultos) + (325 * criancas);
        cerveja = 2000 * adultos;
        refri = (1500 * adultos) + (750 * criancas);
    }
    resultado.innerHTML = `<p>${carne}g de carne</p>`;
    resultado.innerHTML += `<p>${cerveja}ml de cerveja</p>`;
    resultado.innerHTML += `<p>${refri}ml de bebida</p>`;
    console.log(carne)
}

