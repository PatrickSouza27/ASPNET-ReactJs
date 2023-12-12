using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrabalhoWebApi.Data;
using TrabalhoWebApi.Models;
using TrabalhoWebApi.ViewModel;

namespace TrabalhoWebApi.Controllers
{
    [ApiController]
    [Route("/carro")]
    public class CarroController : ControllerBase
    {
        private readonly BaseContext _dbContext;
        public CarroController(BaseContext context)
            => _dbContext = context;

        [HttpGet]
        public async Task<IActionResult> GetCar()
            => Ok(await _dbContext.Carro.AsNoTracking().ToListAsync());

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetCars(int id)
            => Ok(await _dbContext.Carro.AsNoTracking().FirstOrDefaultAsync(x=> x.Id == id));

        [HttpPost]
        public async Task<IActionResult> AddCars([FromBody] CarroViewModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest("Modelo Invalido");

            var user = new Carro(model);
            await _dbContext.Carro.AddAsync(user);
            _dbContext.SaveChanges();

            return Created("carro Salvo com sucesso", user);
        }
        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateCars(int id, [FromBody] CarroViewModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest("Modelo Invalido");


            var user = await _dbContext.Carro.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);


            if (user == null)
                return NotFound("carro não encontrado");


            user.Editar(model);


            _dbContext.Carro.Update(user);
       
            _dbContext.SaveChanges();

            return Ok("carro Editado com sucesso!");
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteCar(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Modelo Invalido");

            var user = await _dbContext.Carro.AsNoTracking().FirstOrDefaultAsync(x=> x.Id == id);

            if (user == null)
                return NotFound("carro não encontrado");


            _dbContext.Carro.Remove(user);

            _dbContext.SaveChanges();

            return Ok("carro Excluido com sucesso");
        }

        

    }
}
