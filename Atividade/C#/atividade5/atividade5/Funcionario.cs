using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace atividade5
{
    class Funcionario
    {
        public string Nome { get; set; }
        public string Cargo { get; set; }
        public double Salario { get; set; }

        public void CalcularAumento(double percentual)
        {
            Salario += Salario * (percentual / 100);
        }

        public void ExibirDados()
        {
            Console.WriteLine($"Nome: {Nome} | Cargo: {Cargo} | Salário: R$ {Salario}");
        }
    }
}
