console.clear()

let contador = 10

while (contador >= 0) {
    console.log("Contagem: "+contador)
    contador--;
    if (contador == 0) {
        console.log("Fogo!!")
        break;
    }
}