using Application.Core;
using Application.DTOs;
using Domain;
using MediatR;
using MongoDB.Bson;
using MongoDB.Driver;
using Persistence;

namespace Application.Courses;

public class List
{
    public class Query : IRequest<Result<List<CourseDto>>>
    {
        
    }
    
    public class Handler : IRequestHandler<Query, Result<List<CourseDto>>>
    {
        private readonly DataContext _context;
        private readonly CourseMapper _mapper;

        public Handler(DataContext context, CourseMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Result<List<CourseDto>>> Handle(Query request, CancellationToken cancellationToken)
        {
            var courses = await _context.Courses.Find(new BsonDocument()).ToListAsync(cancellationToken: cancellationToken);
            List<CourseDto> courseDtos = new();
            foreach (var course in courses)
            {
                var temp = await _mapper.CourseToCourseDto(course, cancellationToken);
                courseDtos.Add(temp);
            }
            return Result<List<CourseDto>>.Success(courseDtos);
        }
    }
}