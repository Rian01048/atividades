console.clear()


function Soma(numeros) {
    let soma = 0;
    for (let count = 0; count < lista.length; count++) {
        soma = sum(lista[count])
    }
    return soma

}

const prompt = require("prompt-sync")()

let lista = new Array(5)

console.log("===== Soma dos números =====")
for (let count = 0; count < lista.length; count++) {
    lista[count] = prompt("Digite o "+(count+1)+"º número: ")
}

console.log(Soma(lista))

