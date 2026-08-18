using atividade1;
using System;

public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("===== Registro =====");
        Console.Write("Digite seu nome: ");
        string NomeAluno = Console.ReadLine();

        Console.Write("digite sua idade: ");
        byte Idadealuno = byte.Parse(Console.ReadLine());

        Console.Write("Digite seu curso: ");
        string CursoAluno = Console.ReadLine();

        Console.Clear();

        Aluno aluno = new Aluno(NomeAluno, Idadealuno, CursoAluno);
        Console.WriteLine($"Aluno: {aluno.Nome}\n" +
            $"Idade: {aluno.Idade}\n" +
            $"Curso: {aluno.Curso}");

    }
}
