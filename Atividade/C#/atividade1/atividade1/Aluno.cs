using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace atividade1
{
     class Aluno
    {
        public string Nome { get; set; }
        public byte Idade { get; set; }
        public string Curso { get; set; }

        public Aluno(string NomeCT, byte IdadeCT, string CursoCT)
        {
            Nome = NomeCT;
            Idade = IdadeCT;
            Curso = CursoCT;
        }
    }
}
