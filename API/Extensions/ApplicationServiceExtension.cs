using Application.Courses;
﻿using Application.Core;
using Application.Courses;
using Persistence;

namespace API.Extensions;

public static class ApplicationServiceExtension
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();

        services.AddSingleton<DataContext>(opt =>
        {
            var connectionString = config.GetValue<string>("ConnectionStrings:MongoDB");
            var databaseName = config.GetValue<string>("MongoDB:DatabaseName");
            return new DataContext(connectionString, databaseName);
        });

        services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<List>());

        services.AddSingleton<CourseMapper>();
        
        return services;
    }
}