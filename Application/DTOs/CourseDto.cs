using Domain;

namespace Application.DTOs;

public class CourseDto
{
    public string Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int? Duration { get; set; } = null!;
    public string Image { get; set; }
    public List<string> Keywords { get; set; }
    public List<string> Instructors { get; set; }
    public int? Rating { get; set; } = null!;
    public object School { get; set; }
    public string Level { get; set; }
    public string Link { get; set; }
}