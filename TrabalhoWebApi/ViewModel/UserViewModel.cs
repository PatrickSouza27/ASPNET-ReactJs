using System.ComponentModel.DataAnnotations;

namespace TrabalhoWebApi.ViewModel
{
    public class UserViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Cpf { get; set; }
        [Required]
        public string Email { get; set; }
        public UserViewModel() { }
        public UserViewModel(string name, string email, string cpf)
        {
            Name = name;
            Email = email;
            Cpf = cpf;
        }
    }
}
