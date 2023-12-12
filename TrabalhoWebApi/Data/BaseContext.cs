using Microsoft.EntityFrameworkCore;
using TrabalhoWebApi.Data.Mapping;
using TrabalhoWebApi.Models;

namespace TrabalhoWebApi.Data
{
    public class BaseContext : DbContext
    {
        public DbSet<Carro> Carro { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("DataSource=banco;Cache=Shared");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CarroMaping());
        }
    }
}
