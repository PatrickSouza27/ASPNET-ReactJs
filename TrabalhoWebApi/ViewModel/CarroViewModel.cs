using System.ComponentModel.DataAnnotations;

namespace TrabalhoWebApi.ViewModel
{
    public class CarroViewModel
    {
        [Required]
        public string Marca { get; set; }
        [Required]
        public string Ano { get; set; }
        [Required]
        public string Modelo { get; set; }
        public CarroViewModel() { }
        public CarroViewModel(string marca, string ano, string modelo)
        {
            Marca = marca;
            Ano = ano;
            Modelo = modelo;
        }
    }
}
