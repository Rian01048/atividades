console.clear()
const prompt = require("prompt-sync")()

function Calcular() {

    let num1 = Number(prompt("Digite o 1º número: "))
    let num2 = Number(prompt("Digite o 2º número: "))

    console.log("+ | - | * | / |")
    let escolha = prompt("Escolha: ")

    let resultado

    switch (escolha) {
        case "+":
            resultado = num1 + num2
            break;
        case "-":
            resultado = num1 - num2
            break;
        case "*":
            resultado = num1 * num2
            break;
        case "/":
            resultado = num1 / num2
            break;

        default:
            return "Operação inválida"
            break;
    }
    console.log("O resultado: " + resultado)
}

Calcular()