using Application.Core;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using Persistence;

namespace Application.Schools;

public class Create
{
    public class Command : IRequest<Result<Unit>>
    {
        public School School { get; set; }
    }

    public class CommandValidator: AbstractValidator<Command>
    {
        public CommandValidator()
        {
            RuleFor(x => x.School).SetValidator(new Validator.CreateValidator());
        }
    }
    public class Handler : IRequestHandler<Command, Result<Unit>>
    {
        private readonly DataContext _context;
        private readonly CommandValidator _validator;

        public Handler(DataContext context, CommandValidator validator)
        {
            _context = context;
            _validator = validator;
        }

        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
            var validationResult = await _validator.ValidateAsync(request, cancellationToken);
            if (!validationResult.IsValid)
            {
                var resultHandler = new Validator();
                return resultHandler.ValidateResult<Unit>(validationResult);
            }
            request.School.Id = ObjectId.GenerateNewId().ToString();

            var task = _context.Schools.InsertOneAsync(request.School, cancellationToken: cancellationToken);

            await task;

            if (task.IsCompletedSuccessfully)
                return Result<Unit>.Success(Unit.Value);

            return Result<Unit>.Failure("Failed to create School");
        }
    }


}