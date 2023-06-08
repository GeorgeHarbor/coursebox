using Application.Core;
using Domain;
using FluentValidation;
using FluentValidation.Results;
using MongoDB.Bson;
using Newtonsoft.Json;

namespace Application.Schools;

public class Validator : AbstractValidator<School>
{
    private bool BeValidObjectId(string objectId)
    {
        return ObjectId.TryParse(objectId, out _);
    }

    public class CreateValidator : Validator
    {
        public CreateValidator()
        {
            RuleFor(x => x.Name).NotNull().WithMessage("Name must not be empty").Length(0, 30)
                .WithMessage("Name must be between less than 30 characters");
            RuleFor(x => x.Description).NotNull().WithMessage("Description must not be empty").Length(0, 500)
                .WithMessage("Description must be between less than 500 characters");
            RuleFor(x => x.Courses).Null().WithMessage("Cannot insert courses while creating a School");
            RuleFor(x => x.ImageLink).NotNull().WithMessage("Image must not be empty")
                .Matches(@"^(http|https)://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$")
                .WithMessage("Image link must be in valid link format");
        }
    }

    public class EditValidator : Validator
    {
        public EditValidator()
        {
            RuleFor(x => x.Id).NotNull().WithMessage("Id must not be null").Must(BeValidObjectId)
                .WithMessage("Id is not valid");
            RuleFor(x => x.Name).Length(1, 30)
                .WithMessage("Name must be between less than 30 characters").When(x => x.Name is not null);
            RuleFor(x => x.Description).Length(1, 500)
                .WithMessage("Description must be between less than 500 characters")
                .When(x => x.Description is not null);
            RuleFor(x => x.Courses)
                .ForEach(course => course.Must(BeValidObjectId).WithMessage("Course Id is not valid"))
                .When(x => x.Courses is not null);
            RuleFor(x => x.ImageLink).Matches(@"^(http|https)://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$")
                .WithMessage("Image link must be in valid link format").When(x => x.ImageLink is not null);
        }

    }

    public Result<T> ValidateResult<T>(ValidationResult validationResult)
    {
        var errors = validationResult.Errors
            .GroupBy(error => error.PropertyName)
            .Select(group => new { Property = group.Key.Split(".")[1], Error = group.First().ErrorMessage })
            .ToList();
        return Result<T>.Failure(JsonConvert.SerializeObject(errors, Formatting.Indented));
    }
}