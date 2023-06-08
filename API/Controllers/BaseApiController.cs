using System.Net;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace API.Controllers;

[EnableCors("DEVPolicy")]
[Route("api/[controller]")]
[ApiController]
public class BaseApiController: ControllerBase
{
        private IMediator _mediator;
        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();

        protected ActionResult HandleResult<T>(Result<T> result)
        {
                
                if(result == null)  return NotFound();
                return result.IsSuccess switch
                {
                        true when result.Value != null => Ok(result.Value),
                        true when result.Value == null => NotFound(),
                        _ => BadRequest(result.Error)
                };
        }
}