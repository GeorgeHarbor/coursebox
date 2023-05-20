using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
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
    [JsonPropertyName(("description"))]
    public string Description { get; set; } = null!;
    
    [BsonElement("duration")]
    [JsonPropertyName(("duration"))]
    public int Duration { get; set; }
    
    
    [BsonElement("image_link")]
    [JsonPropertyName(("image_link"))]
    public string Image { get; set; } = null!;
    
    [BsonElement("instructors")]
    [JsonPropertyName(("instructors"))]
    public List<string>? Instructors { get; set; }
    
    [BsonElement("keywords")]
    [JsonPropertyName("keywords")]
    public List<string>? Keywords { get; set; }

    [BsonElement("rating")]
    [JsonPropertyName("rating")]
    public double Rating { get; set; } 
    
    
    [BsonElement("school")]
    [BsonRepresentation(BsonType.ObjectId)]
    [JsonPropertyName("school")]
    public string School { get; set; } = null!;

    [BsonElement("level")]
    [JsonPropertyName("level")]
    public string Level { get; set; } = null!;

    [BsonElement("link")]
    [JsonPropertyName("link")]
    public string Link { get; set; } = null!;
}