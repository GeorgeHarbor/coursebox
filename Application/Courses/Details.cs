using Domain;
using MediatR;
using MongoDB.Driver;
using Persistence;

namespace Application.Courses;

public class Details
{
    public record Query : IRequest<Course>
    {
        public string Id { get; set; }
    }
    
    public class Handler: IRequestHandler<Query, Course>
    {
        private readonly DataContext _context;

        public Handler(DataContext context)
        {
            _context = context;
        }

        public async Task<Course> Handle(Query request, CancellationToken cancellationToken)
        {
            var result = await _context.Courses.Find(x => x.Id == request.Id).FirstOrDefaultAsync(cancellationToken);

            return result;
        }
    }
}