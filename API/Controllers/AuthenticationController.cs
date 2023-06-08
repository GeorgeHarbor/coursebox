using System.Net;
using Application.DTOs;
using Application.Roles;
using Application.Users;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers;

public class AuthenticationController : BaseApiController
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly RoleManager<ApplicationRole> _roleManager;

    public AuthenticationController(UserManager<ApplicationUser> userManager, RoleManager<ApplicationRole> roleManager)
    {
        _userManager = userManager;
        _roleManager = roleManager;
    }

    [HttpPost]
    [Route("login")]
    [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(LoginResponse))]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        return HandleResult(await Mediator.Send(new Login.Command { LoginRequest = request }));
    }

    [HttpPost]
    [Route("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest request)
    {
        return HandleResult(await Mediator.Send(new Register.Command { RegisterRequest = request }));
    }


    [HttpPost]
    [Route("role")]
    [Authorize(Roles = "ADMIN")]
    public async Task<IActionResult> CreateRole([FromBody] RoleRequest request)
    {
        return HandleResult(await Mediator.Send(new Create.Command { RoleRequest = request }));
    }

   
}