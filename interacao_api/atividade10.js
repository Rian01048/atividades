console.clear()
const prompt = require("prompt-sync")()

function maquinaDeVendas(pedidos) {
    let valorTotal = 0;

    for (let count = 0; count < pedidos.length; count++) {


        switch (pedidos[count]) {
            case 1:
                valorTotal += 5.00;
                break;
            case 2:
                valorTotal += 8.00;
                break;
            case 3:
                valorTotal += 10.00;
                break;
            default:
                console.log("Atenção: O código " + pedidos[count] + " não existe e não foi cobrado.");
                break;
        }
    }

    let valorFinal = 0;


    if (valorTotal > 20.00) {
        let desconto = valorTotal * 0.10;
        valorFinal = valorTotal - desconto;
        console.log("\nSua compra passou de R$ 20,00 e você ganhou 10% de desconto!");
    } else {
        valorFinal = valorTotal;
    }

    return valorFinal;
}


let listaPedidos = new Array(3)

console.log("===== MÁQUINA DE VENDAS =====")
console.log("1 - Refrigerante - R$ 5,00")
console.log("2 - Salgadinho - R$ 8,00")
console.log("3 - Chocolate - R$ 10,00")


for (let count = 0; count < listaPedidos.length; count++) {
    listaPedidos[count] = Number(prompt("Digite o código do " + (count + 1) + "º produto: "))
}


let totalAPagar = maquinaDeVendas(listaPedidos)

console.log("\nO valor final da sua compra é: R$ " + totalAPagar)