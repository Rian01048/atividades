using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace atividade4
{
     class Carro
    {
        public string Marca { get; set; }
        public string Modelo { get; set; }

        public int Velocidade { get; set; }

        public void Acelerar(int valor)
        {
            Velocidade += valor;
        }
        public void Frear(int valor)
        {
            Velocidade -= valor;
        }
    }
}
