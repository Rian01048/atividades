function calcularSoma(event) 
{
    event.preventDefault(); 

    let numero = Number(document.getElementById('num').value);
    let texto = "<h3>Resultado da Soma:</h3>";

    for (let count = 1; count <= 10; count++) {
        let conta = numero + count;
        texto = texto + numero + " + " + count + " = " + conta + "<br>";
    }

    document.getElementById('resultado').innerHTML = texto;
}

function calcularMultiplicacao(event) {
    event.preventDefault(); 

    let numero = Number(document.getElementById('num').value);
    let texto = "<h3>Resultado da Multiplicação:</h3>";

    for (let i = 1; i <= 10; i++) {
        let conta = numero * i;
        texto = texto + numero + " x " + i + " = " + conta + "<br>";
    }

    document.getElementById('resultado').innerHTML = texto;
}