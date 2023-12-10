using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrabalhoWebApi.Data;
using TrabalhoWebApi.Models;
using TrabalhoWebApi.ViewModel;

namespace TrabalhoWebApi.Controllers
{
    [ApiController]
    [Route("/user")]
    public class UserController : ControllerBase
    {
        private readonly BaseContext _dbContext;
        public UserController(BaseContext context)
            => _dbContext = context;

        [HttpGet]
        public async Task<IActionResult> GetUsers()
            => Ok(await _dbContext.Users.AsNoTracking().ToListAsync());

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetUsers(int id)
            => Ok(await _dbContext.Users.AsNoTracking().FirstOrDefaultAsync(x=> x.Id == id));

        [HttpPost]
        public async Task<IActionResult> AddUser([FromBody] UserViewModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest("Modelo Invalido");

            var user = new User(model);
            await _dbContext.Users.AddAsync(user);
            _dbContext.SaveChanges();

            return Created("Usuario Salvo com sucesso", user);
        }
        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] UserViewModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest("Modelo Invalido");


            var user = await _dbContext.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);


            if (user == null)
                return NotFound("Usuario não encontrado");


            user.Editar(model);


            _dbContext.Users.Update(user);
       
            _dbContext.SaveChanges();

            return Ok("Usuario Editado com sucesso!");
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Modelo Invalido");

            var user = await _dbContext.Users.AsNoTracking().FirstOrDefaultAsync(x=> x.Id == id);

            if (user == null)
                return NotFound("Usuario não encontrado");


            _dbContext.Users.Remove(user);

            _dbContext.SaveChanges();

            return Ok("Usuario Excluido com sucesso");
        }

        

    }
}
