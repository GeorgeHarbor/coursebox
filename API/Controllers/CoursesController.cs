using Application.Courses;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using Persistence;

namespace API.Controllers;

public class CoursesController : BaseApiController
{
    [HttpGet]
    public async Task<List<Course>> Test()
    {
        return await Mediator.Send(new List.Query());
    }
}
