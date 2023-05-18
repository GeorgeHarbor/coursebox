using Domain;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using Persistence;

namespace API.Controllers;

public class TestController: BaseApiController
{
   private readonly IMongoCollection<Course> _courseCollection;
   
   public TestController(DataContext context)
   {
      _courseCollection = context.Courses;
   }

   [HttpGet]
   public async Task<List<Course>> Test()
   {
      return await _courseCollection.Find(new BsonDocument()).ToListAsync();

   }
   
}