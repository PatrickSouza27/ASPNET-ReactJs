using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TrabalhoWebApi.Models;

namespace TrabalhoWebApi.Data.Mapping
{
    public class CarroMaping : IEntityTypeConfiguration<Carro>
    {
        public void Configure(EntityTypeBuilder<Carro> builder)
        {
            builder.ToTable(nameof(Carro));

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("INTEGER");

            builder.Property(x => x.Modelo)
                .IsRequired()
                .HasColumnName("Modelo")
                .HasColumnType("NVARCHAR")
                .HasMaxLength(60);


            builder.Property(x => x.Marca)
                .IsRequired()
                .HasColumnName("Marca")
                .HasColumnType("NVARCHAR")
                .HasMaxLength(20);


            builder.Property(x => x.Ano)
                .IsRequired()
                .HasColumnName("Ano")
                .HasColumnType("NVARCHAR")
                .HasMaxLength(60);
        }
    }
}
