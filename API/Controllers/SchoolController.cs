using Application.Core;
using Application.DTOs;
using Application.Schools;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class SchoolController: BaseApiController
{
    [HttpGet]
    public async Task<ActionResult> GetSchools()
    {
        return HandleResult(await Mediator.Send(new List.Query()));
    }
    [HttpGet("{id}")]
    public async Task<ActionResult> GetSchool(string id)
    {
        return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
    }

    [HttpPost]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult> CreateSchool([FromBody] School school)
    {
        return HandleResult(await Mediator.Send(new Create.Command { School = school }));
    }

    [HttpPut]
    [Authorize(Roles = "ADMIN")]
    public async Task<ActionResult> EditSchool([FromBody] School school)
    {
        return HandleResult(await Mediator.Send(new Edit.Command { School = school }));
    }
}