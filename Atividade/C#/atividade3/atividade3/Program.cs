using System;
namespace atividade3;

public class Program
{
    public static void Main(string[] args)
    {
        ContaBancaria minhaConta = new ContaBancaria();
        minhaConta.Titular = "Rian";
        minhaConta.Saldo = 100;

        minhaConta.Depositar(50);

        minhaConta.Sacar(20);

        Console.WriteLine($"O meu saldo é de {minhaConta.Saldo}");
    }
}
