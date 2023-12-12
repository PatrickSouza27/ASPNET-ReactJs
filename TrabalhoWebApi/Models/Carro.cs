using System.ComponentModel.DataAnnotations;
using TrabalhoWebApi.ViewModel;

namespace TrabalhoWebApi.Models
{
    public class Carro
    {
        public int Id { get; set; }
        public string Marca { get; set; }

        public string Ano { get; set; }
 
        public string Modelo { get; set; }
        public Carro() { }
        public Carro(CarroViewModel carro)
        {
            Marca = carro.Marca;
            Ano = carro.Ano;
            Modelo = carro.Ano;
        }
        public void Editar(CarroViewModel carro)
        {
            Marca = carro.Marca;
            Ano = carro.Ano;
            Modelo = carro.Ano;
        }
    }
}
