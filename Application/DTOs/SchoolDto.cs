using Domain;

namespace Application.DTOs;

public class SchoolDto
{
    public string Id { get; set; }
    public List<object> Courses { get; set; }
    public string Description { get; set; }
    public string ImageLink { get; set; }
    public string Name { get; set; }
}