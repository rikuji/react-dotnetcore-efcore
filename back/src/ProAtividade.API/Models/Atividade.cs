﻿namespace ProAtividade.API.Models
{
    public class Atividade
    {
        public Atividade() { }

        public Atividade(int id)
        {
            Id = id;
        }
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Descrição { get; set; }
        public Prioridade Prioridade { get; set; }
    }
}