class Carro {
    constructor(marca, modelo, velocidade = 0) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }


    acelerar(valor) {
        this.velocidade += valor;
    }

    frear(valor) {
        this.velocidade -= valor;
    }
}

const Marca = ("Lamborghini");
const Modelo = ("Veneno");
const Velocidade = 0;

const meuCarro = new Carro(Marca, Modelo, Velocidade);
meuCarro.acelerar(120);
meuCarro.acelerar(150);
meuCarro.frear(142);

console.log(`O carro está em uma corrida`)
console.log(`Velocidade final: ${meuCarro.velocidade} km/h`);