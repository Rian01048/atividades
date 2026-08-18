class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        this.saldo -= valor;
    }
}


const conta = new ContaBancaria("Rian", 100);
conta.depositar(50);
conta.sacar(20);

console.log(`O meu saldo é de: R$ ${conta.saldo}`);