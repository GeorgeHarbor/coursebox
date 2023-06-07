using System.Text.Json.Serialization;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Domain;

public class Course
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    [BsonIgnoreIfNull]
    public string? Id { get; set; }

    [BsonElement("name")]
    [JsonPropertyName(("name"))]
    [BsonIgnoreIfNull]
    public string? Name { get; set; }


    [BsonElement("description")]
    [JsonPropertyName(("description"))]
    [BsonIgnoreIfNull]
    public string? Description { get; set; }

    [BsonElement("duration")]
    [JsonPropertyName(("duration"))]
    [BsonIgnoreIfNull]
    public int? Duration { get; set; }
    
    
    [BsonElement("image_link")]
    [JsonPropertyName(("image_link"))]
    [BsonIgnoreIfNull]
    public string? Image { get; set; }

    [BsonElement("instructors")]
    [JsonPropertyName(("instructors"))]
    [BsonIgnoreIfNull]
    public List<string>? Instructors { get; set; }
    
    [BsonElement("keywords")]
    [JsonPropertyName("keywords")]
    [BsonIgnoreIfNull]
    public List<string>? Keywords { get; set; }

    [BsonElement("rating")]
    [JsonPropertyName("rating")]
    [BsonIgnoreIfNull]
    public int? Rating { get; set; }
    
    
    [BsonElement("school")]
    [JsonPropertyName("school")]
    [BsonIgnoreIfNull]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? School { get; set; }

    [BsonElement("level")]
    [JsonPropertyName("level")]
    [BsonIgnoreIfNull]
    public string? Level { get; set; }

    [BsonElement("link")]
    [JsonPropertyName("link")]
    [BsonIgnoreIfNull]
    public string? Link { get; set; }
}