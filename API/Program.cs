using API.Extensions;
using API.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(
    options =>
    {
        options.AddPolicy(
            name: "APIPolicy",
            policy =>
                {
                    policy.WithOrigins("localhost", "https://coursebox.rs")
                    .WithMethods("GET", "POST", "DELETE", "PUT")
                    .AllowAnyHeader();
                }
            );
        options.AddPolicy(
            name: "DEVPolicy",
            policy =>
            {
                policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
            }
            );
    }
    );

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

builder.Services.AddApplicationServices(builder.Configuration);

var app = builder.Build();
app.UseCors();

app.UseMiddleware<ExceptionMiddleware>();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();