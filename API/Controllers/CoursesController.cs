using Application.Courses;
using Domain;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using Persistence;

namespace API.Controllers;

public class CoursesController : BaseApiController
{
    private readonly DataContext _context;

    public CoursesController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Course>>> GetCourses()
    {
        return HandleResult(await Mediator.Send(new List.Query()));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Course>> FindCourse(string id)
    {
        ObjectId newId = ObjectId.Parse(id);
        return HandleResult(await Mediator.Send(new Details.Query{Id = newId}));
    }

    [HttpPost]
    public async Task<ActionResult> CreateCourse([FromBody] Course course)
    {
        return HandleResult(await Mediator.Send(new Create.Command { Course = course }));
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteCourse(string id)
    {
        
        return HandleResult(await Mediator.Send(new Delete.Command { Id = id}));
    }

    [HttpPut]
    public async Task<ActionResult> EditCourse([FromBody] Course course)
    {
        return HandleResult(await Mediator.Send(new Edit.Command {Course = course}));
    }

}
