let url = "https://api.exchangeratesapi.io/latest?baseUSD&symbols=BRL";



function converter() {
    let input = document.getElementById("valor");
    let valor = input.value;

    fetch(url)
    .then((res) => {

        return res.json();

    })
    .then((data) => {
        
        let rate = data.rates.BRL;

        let resultado = `${valor} dolares = ${rate * valor} em reais`
        document.getElementById("resultado").innerHTML = resultado;
    });

}

