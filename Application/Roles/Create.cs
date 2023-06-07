using Application.Core;
using Application.DTOs;
using Application.Users;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace Application.Roles;

public class Create
{
    public class Command : IRequest<Result<Unit>>
    {
        public RoleRequest RoleRequest { get; set; }
    }
    
    public class Handler: IRequestHandler<Command, Result<Unit>>
    {
        private readonly RoleManager<ApplicationRole> _roleManager;

        public Handler(RoleManager<ApplicationRole> roleManager)
        {
            _roleManager = roleManager;
        }

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
        var appRole = new ApplicationRole { Name = request.RoleRequest.Role };
        var createRole = await _roleManager.CreateAsync(appRole);

        return createRole.Succeeded ? Result<Unit>.Success(Unit.Value) : Result<Unit>.Failure("Failed to create role");
        }
    }
}