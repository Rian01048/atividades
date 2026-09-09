console.clear()

const prompt = require("prompt-sync")()

let lista = new Array(6)

for (let count = 0; count < lista.length; count++) {
    lista[count] = Number(prompt("Digite o "+(count+1)+"º número: "))
}

let filtro = lista.filter(num => num > 0)
console.log(filtro)
