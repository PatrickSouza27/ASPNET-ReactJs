using System.ComponentModel.DataAnnotations;
using TrabalhoWebApi.ViewModel;

namespace TrabalhoWebApi.Models
{
    public class User
    {
        public int Id { get; set; }        
        public string Name { get; set; }        
        public string Cpf { get; set; } 
        public string Email { get; set; }
        public User() { }
        public User(UserViewModel user)
            => Editar(user);        
        public void Editar(UserViewModel user)
        {
            if(user != null)
            {
                Name = user.Name;
                Cpf = user.Cpf;
                Email = user.Email;
            }
        }
    }
}
