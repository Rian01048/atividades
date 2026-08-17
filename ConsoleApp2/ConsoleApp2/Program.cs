using ConsoleApp2;
using System;


public class Program
{
    public static void Main(string[] args)
    {
        Console.Write("Digite o nome do produto: ");
        string Nome = Console.ReadLine();

        Console.Write("Digite o preço: ");
        float preco = float.Parse(Console.ReadLine());

        Console.Write("Digite a quantidade: ");
        int quant = int.Parse(Console.ReadLine());
        new Produto().ExibirDados(Nome, preco, quant);
    }
}