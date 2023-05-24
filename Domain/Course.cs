using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FluentValidation;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Domain;

public class Course
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    [Required]
    public string Id { get; set; } = null!;

    [BsonElement("name")]
    [JsonPropertyName(("name"))]
    public string Name { get; set; } = null!;

    [BsonElement("description")]

    public string Description { get; set; } = null!;

    [BsonElement("duration")]
    public int Duration { get; set; }

    [BsonElement("image_link")]
    public string Image_link { get; set; } = null!;

    [BsonElement("instructors")]
    public string[] Instructors { get; set; } = null!;

    [BsonElement("keywords")]
    public string[] Keywords { get; set; } = null!;

    [BsonElement("rating")]
    public int Rating { get; set; }

    [BsonElement("school")]
    [BsonRepresentation(BsonType.ObjectId)]
    public string School { get; set; } = null!;

    [BsonElement("level")]
    public string Level { get; set; } = null!;

    [BsonElement("link")]
    public string Link { get; set; } = null!;

}

public class CourseValidator : AbstractValidator<Course>
{
    public CourseValidator()
    {
        List<string> tezina = new List<string>() { "Beginner", "Intermediate", "Expert" };

        RuleFor(course => course.Id).NotNull();
        RuleFor(course => course.Name).NotNull();
        RuleFor(course => course.Name).Length(0,60).WithMessage("Please entre the course name. The name must be under 60 characters.");
        RuleFor(course => course.Instructors).NotNull().WithMessage("Please enter at least one instructor.");
        RuleFor(course => course.Keywords).NotNull().WithMessage("Please enter at least one keyword.");
        RuleFor(course => course.School).NotNull().WithMessage("Please enter a school.");
        RuleFor(course => course.Level).NotNull();
        RuleFor(course => course.Level).Must(course=>tezina.Contains(course)).WithMessage("Please only use: " + String.Join(",", tezina));
        RuleFor(course => course.Link).NotNull().WithMessage("Please enter a valid link to the existing course.");
    }
}