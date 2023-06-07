using Application.Core;
using Application.DTOs;
using MediatR;
using MongoDB.Bson;
using MongoDB.Driver;
using Persistence;

namespace Application.Schools;

public class List
{
    public class Query : IRequest<Result<List<SchoolDto>>>
    {
    }

    public class Handler : IRequestHandler<Query, Result<List<SchoolDto>>>
    {
        private readonly DataContext _context;
        private readonly SchoolMapper _mapper;

        public Handler(DataContext context, SchoolMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Result<List<SchoolDto>>> Handle(Query request, CancellationToken cancellationToken)
        {
            try
            {
                var result = await _context.Schools.Find(new BsonDocument())
                    .ToListAsync(cancellationToken: cancellationToken);

                List<SchoolDto> schools = new();

                foreach (var school in result)
                {
                    schools.Add(await _mapper.SchoolToSchoolDto(school));
                }

                return Result<List<SchoolDto>>.Success(schools);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return Result<List<SchoolDto>>.Failure("Failed to retrieve Schools");
            }
        }
    }
}