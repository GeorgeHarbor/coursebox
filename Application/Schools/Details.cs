using Application.Core;
using Application.DTOs;
using MediatR;
using MongoDB.Driver;
using Persistence;

namespace Application.Schools;

public class Details
{
    public record Query : IRequest<Result<SchoolDto>>
    {
        public string Id { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<SchoolDto>>
    {
        private readonly DataContext _context;
        private readonly SchoolMapper _mapper;

        public Handler(DataContext context, SchoolMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Result<SchoolDto>> Handle(Query request, CancellationToken cancellationToken)
        {
            var school = await _context.Schools.Find(x => x.Id.Equals(request.Id))
                .FirstOrDefaultAsync(cancellationToken);
            SchoolDto schoolDto = await _mapper.SchoolToSchoolDto(school);

            return Result<SchoolDto>.Success(schoolDto);
        }
    }
}