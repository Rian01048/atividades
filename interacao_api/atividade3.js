console.clear()

let num = [0,0,0,0,0]

const prompt = require("prompt-sync")()

for (let count = 0; count < num.length; count++) {
    num[count] = Number(prompt("Digite o "+(count+1)+"º Número: "))
}
console.clear()
console.log("===== Resultado =====")
for (let count = 0; count < num.length; count++) {
    multiplicacao = (num[count] * 2)
    console.log("Número: "+num[count]+" Resultado: "+multiplicacao)
}

