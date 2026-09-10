console.clear()
const prompt = require("prompt-sync")()

function filtrarPositivos(numeros) {
    let lista_Positivos = []

    for (let count = 0; count < numeros.length; count++) {
        if (numeros[count] > 0) {
            lista_Positivos.push(numeros[count])
        }
    }

    return lista_Positivos
}

let lista = new Array(6)

for (let count = 0; count < lista.length; count++) {
    lista[count] = Number(prompt("Digite o " + (count + 1) + "º número: "))
}

let filtro = filtrarPositivos(lista)

console.log("Os números positivos são:", filtro)