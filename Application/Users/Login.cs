using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Application.Core;
using Application.DTOs;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using JwtRegisteredClaimNames = Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames;

namespace Application.Users;

public class Login
{
    public class Command : IRequest<Result<LoginResponse>>
    {
        public LoginRequest LoginRequest { get; set; }
    }

    public class Handler : IRequestHandler<Command, Result<LoginResponse>>
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IConfiguration _config;

        public Handler(UserManager<ApplicationUser> userManager, IConfiguration config)
        {
            _userManager = userManager;
            _config = config;
        }

        public async Task<Result<LoginResponse>> Handle(Command request, CancellationToken cancellationToken)
        {
            try
            {
                var user = await _userManager.FindByEmailAsync(request.LoginRequest.Email);
                if (user is null)
                    return Result<LoginResponse>.Success(new LoginResponse
                        { Message = "Invalid email or password", Success = false });

                var claims = new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                    new Claim(ClaimTypes.Name, user.UserName!),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
                };
                var roles = await _userManager.GetRolesAsync(user);
                var roleClaims = roles.Select(x => new Claim(ClaimTypes.Role, x));
                claims.AddRange(roleClaims);

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetValue<string>("SymmetricSecurityKey:Key")));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                var expires = DateTime.Now.AddHours(3);

                var token = new JwtSecurityToken
                (
                    issuer: "http://localhost:5041",
                    audience: "http://localhost:5041",
                    claims: claims,
                    expires: expires,
                    signingCredentials: creds
                );

                var response = new LoginResponse
                {
                    AccessToken = new JwtSecurityTokenHandler().WriteToken(token),
                    Message = "Login Successful",
                    Email = user.Email,
                    Success = true,
                    UserId = user.Id.ToString()
                };

                return Result<LoginResponse>.Success(response);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return Result<LoginResponse>.Failure("Failed to login user");
            }
        }
    }
}