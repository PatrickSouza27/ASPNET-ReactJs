using Microsoft.EntityFrameworkCore;
using TrabalhoWebApi.Data.Mapping;
using TrabalhoWebApi.Models;

namespace TrabalhoWebApi.Data
{
    public class BaseContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("DataSource=app;Cache=Shared");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserMapping());
        }
    }
}
