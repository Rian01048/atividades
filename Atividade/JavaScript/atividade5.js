class Funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    calcularAumento(percentual) {
        this.salario += this.salario * (percentual / 100);
    }

    exibirDados() {
        console.log(`Nome: ${this.nome} | Cargo: ${this.cargo} | Salário: R$ ${this.salario}`);
    }
}


const funcionario = new Funcionario("Rian", "Analista de Sistemas", 30000);
funcionario.calcularAumento(5);
funcionario.exibirDados();