using System;
namespace atividade4;

public class Program
{
    public static void Main(string[] args)
    {
        Carro meuCarro = new Carro();

        meuCarro.Marca = "Lamborghini";
        meuCarro.Modelo = "Veneno";

        meuCarro.Acelerar(120);
        meuCarro.Acelerar(150); 
        meuCarro.Frear(142);

        Console.WriteLine($"A {meuCarro.Marca} {meuCarro.Modelo} está em uma corrida");
        Console.WriteLine($"Velocidade final: {meuCarro.Velocidade} km/h");
    }
}
