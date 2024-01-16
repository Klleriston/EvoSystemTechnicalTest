using API.EVOSYSTEMS.Data;
using API.EVOSYSTEMS.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<EvoSystemDBcontext>(options => options
    .UseNpgsql(builder.Configuration.GetConnectionString("connectionDB")));
builder.Services.AddScoped<DepartmentService>();
builder.Services.AddScoped<EmployeeService>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(policy => 
    policy.AllowAnyOrigin()
    .AllowAnyHeader()
    .AllowAnyMethod()
    );

app.UseAuthorization();

app.MapControllers();

app.Run();
