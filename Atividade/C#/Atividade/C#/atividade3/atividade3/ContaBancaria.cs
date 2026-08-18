using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace atividade3
{
    class ContaBancaria
    {
        public string Titular { get; set; }
        public float Saldo { get; set; }

        public void Depositar(float valor)
        {
            Saldo += valor;
        }
        public void Sacar(float valor)
        {
            Saldo -= valor;
        }

    }
}
