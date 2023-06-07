using Application.Core;
using Domain;
using MediatR;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Conventions;
using MongoDB.Driver;
using Persistence;

namespace Application.Courses;

public class Delete
{
    public class Command : IRequest<Result<Unit>>
    {
        public string Id { get; set; }
    }

    public class Handler : IRequestHandler<Command, Result<Unit>>
    {
        private readonly DataContext _context;

        public Handler(DataContext context)
        {
            _context = context;
        }

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            var course =  await _context.Courses.Find(x => x.Id.Equals(request.Id))
                .FirstOrDefaultAsync(cancellationToken);
            if (course is null) return Result<Unit>.Failure("Invalid Course Id.");

            var school = await _context.Schools.Find(x => x.Id.Equals(course.School)).FirstOrDefaultAsync(cancellationToken:cancellationToken);
            if (school is null) return Result<Unit>.Failure("Unable to find matching School");
            
            try
            { 
                var courseDeleteTask = await _context.Courses.DeleteOneAsync(x => x.Id.Equals(request.Id), cancellationToken: cancellationToken);
                if (courseDeleteTask.DeletedCount == 0) return Result<Unit>.Failure("Failed to delete course.");

                school.Courses.Remove(course.Id!);
                
                var schoolUpdateTask = _context.Schools.ReplaceOneAsync(x => x.Id.Equals(school.Id), school, cancellationToken:cancellationToken);
                await schoolUpdateTask;
                if (schoolUpdateTask.Result.ModifiedCount == 0)
                {
                    await _context.Courses.InsertOneAsync(course, cancellationToken: cancellationToken);
                    return Result<Unit>.Failure("Failed to update School");
                }

                return Result<Unit>.Success(Unit.Value);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return Result<Unit>.Failure("Failed to delete Course");
            }
        }
    }
}