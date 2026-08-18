using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace atividade2
{
     class Produto
    {
        public string Nome { get; set; }
        public float Preco { get; set; }
        public int Quantidade { get; set; }

        public void ExibirDados(string Nome, float Preco, int Quantidade)
        {
            Console.WriteLine($"Nome: {Nome}\nPreço: R${Preco}\nQuantidade: {Quantidade}");
        }
    }
}
