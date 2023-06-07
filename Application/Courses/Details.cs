using Application.Core;
using Application.DTOs;
using MediatR;
using MongoDB.Bson;
using MongoDB.Driver;
using Persistence;

namespace Application.Courses;

public class Details
{
    public record Query : IRequest<Result<CourseDto>>
    {
        public ObjectId? Id { get; set; }
    }
    
    public class Handler: IRequestHandler<Query, Result<CourseDto>>
    {
        private readonly DataContext _context;
        private readonly CourseMapper _mapper;

        public Handler(DataContext context, CourseMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Result<CourseDto>> Handle(Query request, CancellationToken cancellationToken)
        {
            var course = await _context.Courses.Find(x => x.Id!.Equals(request.Id.ToString())).FirstOrDefaultAsync(cancellationToken);
            var courseDto = await _mapper.CourseToCourseDto(course, cancellationToken); 
            return Result<CourseDto>.Success(courseDto);
        }
    }
}