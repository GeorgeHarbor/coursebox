using Application.Core;
using Domain;
using MediatR;
using MongoDB.Bson;
using MongoDB.Driver;
using Persistence;

namespace Application.Courses;

public class Create
{
    public class Command : IRequest<Result<Unit>>
    {
        public Course Course { get; set; }
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
            var courseId = ObjectId.GenerateNewId();
            request.Course.Id = courseId.ToString();
            // ObjectId.TryParse(request.Course.Id, out var courseId);
            // ObjectId.TryParse(request.Course.School, out var schoolId);
            var schoolId = request.Course.School;
            var school = await _context.Schools.Find(x => x.Id.Equals(schoolId))
                .FirstOrDefaultAsync(cancellationToken);
            if (school is null) return Result<Unit>.Failure("Not a valid School Id");

            var insertTask =  _context.Courses.InsertOneAsync(request.Course, cancellationToken: cancellationToken);

            school.Courses.Add(courseId.ToString());

            var updateTask = _context.Schools.ReplaceOneAsync(x => x.Id.Equals(school.Id), school, cancellationToken: cancellationToken);
            


            await Task.WhenAll(insertTask, updateTask);
            if (updateTask.Result.ModifiedCount > 0 && insertTask.IsCompletedSuccessfully)
            {
                return Result<Unit>.Success(Unit.Value);
            }

            await _context.Courses.DeleteOneAsync(x =>  x.Id!.Equals(courseId), cancellationToken);
            await _context.Schools.DeleteOneAsync(x => x.Id.Equals(schoolId), cancellationToken);
            return Result<Unit>.Failure("Failed to update course");
        }
    }
}