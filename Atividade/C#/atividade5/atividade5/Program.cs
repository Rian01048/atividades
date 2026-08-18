using System;
namespace atividade5;

public class Program
{
    public static void Main(string[] args)
    {
        Funcionario funcionario = new Funcionario();
        funcionario.Nome = "Rian";
        funcionario.Cargo = "Analista de Sistema";
        funcionario.Salario = 30000;

        funcionario.CalcularAumento(5); 
        funcionario.ExibirDados();
    }
}
