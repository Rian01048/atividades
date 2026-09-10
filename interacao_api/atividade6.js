console.clear()
const prompt = require("prompt-sync")()

function somarElementos(numeros) {
    let soma = 0;

    for (let count = 0; count < numeros.length; count++) {
        soma = soma + numeros[count];
    }

    return soma;
}

let lista = new Array(5)

console.log("===== Soma dos números =====")

for (let count = 0; count < lista.length; count++) {
    lista[count] = Number(prompt("Digite o " + (count + 1) + "º número: "))
}

let resultado = somarElementos(lista)

console.log("A soma total é:", resultado)