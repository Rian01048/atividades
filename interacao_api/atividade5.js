console.clear()

function Saudacao(dia) {
    if (dia <= 12) {
        return "Bom dia"
    }
    else if (dia > 12 && dia <= 17) {
        return "Boa tarde"
    }
    else {
        return "Boa noite"
    }
}

const prompt = require("prompt-sync")()

let num = Number(prompt("Digite um número: "))
console.log(Saudacao(num))