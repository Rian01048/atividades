console.clear()

let numeros = [12, 34, 7, 89, 50, 23, 91]

let contador = 0


while (contador < numeros.length) {

    if (numeros[contador] == 50) {
        console.log("Encontrado no índice: " + contador)
        break;
    } else {
        contador++;
    }
}