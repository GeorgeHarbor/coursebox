using Application.Core;
using Application.DTOs;
using Domain;
using FluentValidation;
using MediatR;
using MongoDB.Bson;
using MongoDB.Driver;
using Newtonsoft.Json;
using Persistence;

namespace Application.Courses;

public class Edit
{
    public class Command : IRequest<Result<Unit>>
    {
        public Course Course { get; set; }
    }

    public class Validator : AbstractValidator<Command>
    {
        public Validator()
        {
            RuleFor(x => x.Course).SetValidator(new Courses.Validator.EditValidator());
        }
    }

    public class Handler : IRequestHandler<Command, Result<Unit>>
    {
        private readonly DataContext _context;
        private readonly CourseMapper _mapper;
        private readonly Validator _validator;

        public Handler(DataContext context, CourseMapper mapper, Validator validator)
        {
            _context = context;
            _mapper = mapper;
            _validator = validator;
        }

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            var validationResult = await _validator.ValidateAsync(request, cancellationToken);
            if (!validationResult.IsValid)
            {
                var resultHandler = new Courses.Validator();
                return resultHandler.ValidateResult<Unit>(validationResult);
            }

            if (request.Course is null)
            {
                return Result<Unit>.Failure("Invalid course");
            }

            var course = await _context.Courses.Find(x => x.Id.Equals(request.Course.Id))
                .FirstOrDefaultAsync(cancellationToken);
            try
            {
                if (course is null)
                {
                    return Result<Unit>.Failure("Unable to find course with that Id");
                }

                if (course.School != request.Course.School && request.Course.School != null)
                {
                    var oldSchool = await _context.Schools.Find(x => x.Id.Equals(course.School)).FirstOrDefaultAsync();
                    var newSchool = await _context.Schools.Find(x => x.Id.Equals(request.Course.School))
                        .FirstOrDefaultAsync();

                    oldSchool.Courses.Remove(request.Course.Id);
                    newSchool.Courses.Add(request.Course.Id);

                    var oldTask = _context.Schools.ReplaceOneAsync(x => x.Id.Equals(oldSchool.Id),
                        oldSchool, cancellationToken: cancellationToken);
                    var newTask = _context.Schools.ReplaceOneAsync(x => x.Id.Equals(newSchool.Id), newSchool,
                        cancellationToken: cancellationToken);

                    await Task.WhenAll(oldTask, newTask);

                    if (oldTask.Result.ModifiedCount == 0 || newTask.Result.ModifiedCount == 0)
                    {
                        throw new Exception("Failed to modify Schools");
                    }
                }

                Course newCourse = course;
                _mapper.CourseToCourse(request.Course, newCourse);
                var courseTask = _context.Courses.ReplaceOneAsync(x => x.Id!.Equals(course.Id), newCourse,
                    cancellationToken: cancellationToken);

                await courseTask;
                if (!courseTask.IsCompletedSuccessfully) throw new Exception("Failed to update Course");

                return Result<Unit>.Success(Unit.Value);
            }
            catch (Exception ex)
            {
                return Result<Unit>.Failure(ex.Message);
            }
        }
    }
}