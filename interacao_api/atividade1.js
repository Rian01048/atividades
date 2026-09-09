console.clear()

const prompt = require("prompt-sync")()

console.log("===== Par e Impar =====")
let num = Number(prompt("Digite um número: "))

if (num %2 == 0) {
    console.log("Número par")
}
else {
    console.log("Número impar")
}