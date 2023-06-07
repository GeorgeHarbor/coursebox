using Application.Core;
using Application.DTOs;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace Application.Users;

public class Register
{
    public class Command : IRequest<Result<RegisterResponse>>
    {
        public RegisterRequest RegisterRequest { get; set; }
    }

    public class Handler : IRequestHandler<Command, Result<RegisterResponse>>
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public Handler(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<Result<RegisterResponse>> Handle(Command request, CancellationToken cancellationToken)
        {
            try
            {
                var userExists = await _userManager.FindByEmailAsync(request.RegisterRequest.Email);
                if (userExists != null)
                    return Result<RegisterResponse>.Failure("User with that email already exists");

                userExists = new ApplicationUser
                {
                    FullName = request.RegisterRequest.FullName,
                    Email = request.RegisterRequest.Email,
                    ConcurrencyStamp = Guid.NewGuid().ToString(),
                    UserName = request.RegisterRequest.UserName,
                    DOB = request.RegisterRequest.Dob,
                    Image = request.RegisterRequest.Image,
                    Interests = request.RegisterRequest.Interests,
                };

                var createUserResult = await _userManager.CreateAsync(userExists, request.RegisterRequest.Password);

                if (!createUserResult.Succeeded)
                    return Result<RegisterResponse>.Failure("Failed to create user");

                var addUserToRolesResult = await _userManager.AddToRoleAsync(userExists, "USER");
                if (!addUserToRolesResult.Succeeded)
                    return Result<RegisterResponse>.Failure("Managed to add user, but failed on adding a role");

                return Result<RegisterResponse>.Success(
                    new RegisterResponse
                    {
                        Success = true,
                        Message = "User registered successfully"
                    });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return Result<RegisterResponse>.Failure(ex.Message);
            }
        }
    }
}