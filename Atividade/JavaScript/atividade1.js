// Classe Aluno
class Aluno {
    constructor(nomeCT, idadeCT, cursoCT) {
        this.nome = nomeCT;
        this.idade = idadeCT;
        this.curso = cursoCT;
    }
}

console.log("===== Registro =====");

const nomeAluno = ("Rian");
const idadeAluno = Number((19));
const cursoAluno = ("Full Stack");

const aluno = new Aluno(nomeAluno, idadeAluno, cursoAluno);

console.log(
    `Aluno: ${aluno.nome}\n` +
    `Idade: ${aluno.idade}\n` +
    `Curso: ${aluno.curso}`
);