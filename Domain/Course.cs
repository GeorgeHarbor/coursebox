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
    public ObjectId School { get; set; }

    [BsonElement("level")]
    public string Level { get; set; } = null!;

    [BsonElement("link")]
    public string Link { get; set; } = null!;



}