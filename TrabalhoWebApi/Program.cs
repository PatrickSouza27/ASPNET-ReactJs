using Microsoft.EntityFrameworkCore;
using TrabalhoWebApi.Data;

var builder = WebApplication.CreateBuilder(args);



builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin", builder =>
        builder.WithOrigins("http://localhost:3000") // Substitua pelo endereço do seu aplicativo React
               .AllowAnyHeader()
               .AllowAnyMethod());
});

builder.Services.AddControllers();
builder.Services.AddDbContext<BaseContext>();

var app = builder.Build();


app.MapControllers();

app.UseCors("AllowOrigin");

app.Run();
