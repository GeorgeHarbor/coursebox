namespace Application.DTOs;

public class CoursePartial
{
    public string Id { get; set; }
    public string Name { get; set; }
    public int? Duration { get; set; }
    public int? Rating { get; set; }
    public string Image { get; set; }
    public List<string> Instructors { get; set; }
    public List<string> Keywords { get; set; }
    public string Link { get; set; }
}