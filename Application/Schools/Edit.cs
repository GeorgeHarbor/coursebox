using Application.Core;
using Domain;
using MediatR;
using MongoDB.Driver;
using Persistence;

namespace Application.Schools;

public class Edit
{
    public class Command : IRequest<Result<Unit>>
    {
        public School School { get; set; }
    }
    
    public class Handler: IRequestHandler<Command, Result<Unit>>
    {
        private readonly DataContext _context;
        private readonly SchoolMapper _mapper;

        public Handler(DataContext context, SchoolMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            var ogSchool = await _context.Schools.Find(x => x.Id.Equals(request.School.Id)).FirstOrDefaultAsync(cancellationToken: cancellationToken);
            ogSchool = _mapper.SchoolToSchool(ogSchool, request.School);

            var task = _context.Schools.ReplaceOneAsync(x => x.Id.Equals(ogSchool.Id),ogSchool, cancellationToken: cancellationToken);
            await task;
            if (task.Result.ModifiedCount > 0)
            {
                return Result<Unit>.Success(Unit.Value);
            }
            return Result<Unit>.Failure("Failed to update School");

        }
    }
}