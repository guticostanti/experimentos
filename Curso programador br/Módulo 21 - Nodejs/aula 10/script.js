// Importando 'fs'

// let fs = require('fs');




//Caso não haja nenhum arquivo:
    //- A função writeFile vai criar um arquivo e inserir o conteúdo.
//Caso já exista um arquivo:
    //- A função writeFile vai apagar tudo que tiver dentro do arquivo e escrever em cima dele.
/*
fs.writeFile('teste.txt', 'Ola mundo', function(error) {

    if(error) {
        throw error;
    } else {
        console.log('Arquivo criado com sucesso');
    }

}); */




// A função appendFile vai apenas abrir o arquivo e add o conteúdo.
/*
fs.appendFile('teste.txt', 'Vai Corinthians', function(error) {
    if(error) {
        throw error;
    } else {
        console.log('Arquivo atualizado com sucesso.');
    }
});
*/



// A função unlink apaga um determinado arquivo
/*
fs.unlink('teste.txt', function(error) {
    if (error) {
        throw error;
    } else {
        console.log('Arquivo apagado com sucesso.');
    }
});
*/


// A função rename renomeia o arquivo
/*
fs.rename('teste.txt', 'novoNome.txt', function(error) {
    if (error) {
        throw error;
    } else {
        console.log('Arquivo renomeado com sucesso');
    }
});
*/


// A função readFile apenas lê o arquivo
// O segundo parâmetro diz o formato em que o arquivo deve ser lido.
// Caso não especificado o segundo parâmetro, será retornado um buffer.
/*
fs.readFile('teste.txt', 'UTF8' ,function(error, data) {
    if (error) {
        throw error;
    } else {
        console.log(data);
    }
});
*/


// Fazendo algo mais interessante juntando todos os conceitos.

let fs = require('fs');
let args = process.argv.slice(2);

let fileName = args[0];

fs.readFile(fileName, 'UTF8', function(error, data) {
    if (error) {
        throw error;
    } else {
        fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), function(error) {
            if(error) {
                throw error;
            } else {
                console.log('Arquivo gerado com sucesso.');
            }
        })
    }
})