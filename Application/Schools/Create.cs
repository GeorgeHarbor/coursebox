using Application.Core;
using Domain;
using MediatR;
using MongoDB.Bson;
using Persistence;

namespace Application.Schools;

public class Create
{
    public class Command : IRequest<Result<Unit>>
    {
        public School School { get; set; }
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
            request.School.Id = ObjectId.GenerateNewId().ToString();

            var task = _context.Schools.InsertOneAsync(request.School, cancellationToken: cancellationToken);

            await task;

            if (task.IsCompletedSuccessfully)
                return Result<Unit>.Success(Unit.Value);

            return Result<Unit>.Failure("Failed to create School");
        }
    }
}