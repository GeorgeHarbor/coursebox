using Application.Core;
using Domain;
using FluentValidation;
using FluentValidation.Results;
using MongoDB.Bson;
using Newtonsoft.Json;

namespace Application.Courses;

public class Validator : AbstractValidator<Course>
{
    private bool BeValidObjectId(string objectId)
    {
        return ObjectId.TryParse(objectId, out _);
    }

    public class CreateValidator : Validator
    {
        public CreateValidator()
        {
            List<string> tezina = new List<string>() { "Beginner", "Intermediate", "Expert" };
            RuleFor(x => x.Name).NotNull().Length(0, 30)
                .WithMessage("Please entre the x.Course name. The name must be under 30 characters.");
            RuleFor(x => x.Instructors).NotNull().WithMessage("Please enter at least one instructor.");
            RuleFor(x => x.Keywords).NotNull().WithMessage("Please enter at least one keyword.");
            RuleFor(x => x.School).NotNull().Must(BeValidObjectId).WithMessage("Please enter a valid schoolId.");
            RuleFor(x => x.Level).NotNull().Must(x => tezina.Contains(x))
                .WithMessage("Level can only be either Beginner, Intermediate or Expert");
            RuleFor(x => x.Link).NotNull().Matches(@"^(http|https)://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$")
                .WithMessage("Please enter a valid link to the existing Course");
        }
    }

    public class EditValidator : Validator
    {
        public EditValidator()
        {
            List<string> tezina = new List<string>() { "Beginner", "Intermediate", "Expert" };
                        RuleFor(x => x.Id).NotNull().Must(BeValidObjectId)
                            .WithMessage("Please enter a valid Course Id");
                        RuleFor(x => x.Name).Length(0, 30)
                            .WithMessage("Please entre the x.Course name. The name must be under 30 characters.")
                            .When(x => x.Name is not null);
                        RuleFor(x => x.School).Must(BeValidObjectId).WithMessage("Please enter a valid schoolId.")
                            .When(x => x.School is not null);
                        RuleFor(x => x.Level).Must(x => tezina.Contains(x))
                            .WithMessage("Level can only be either Beginner, Intermediate or Expert")
                            .When(x => x.Level is not null);
                        RuleFor(x => x.Link).Matches(@"^(http|https)://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$")
                            .WithMessage("Please enter a valid link to the existing Course").When(x => x.Link is not null);
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