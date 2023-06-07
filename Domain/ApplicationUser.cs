using System.Text.Json.Serialization;
using AspNetCore.Identity.MongoDbCore.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDbGenericRepository.Attributes;

namespace Domain;

[CollectionName("Users")]
public class ApplicationUser: MongoIdentityUser
{
    [BsonElement("full_name")]
    [JsonPropertyName("full_name")]
    public string FullName { get; set; } = string.Empty;
    
    [BsonElement("DOB")]
    [JsonPropertyName("DOB")]
    public DateTime DOB { get; set; } = DateTime.Now;
    
    [BsonElement("image_link")]
    [JsonPropertyName("image_link")]
    public string Image { get; set; }= string.Empty;

    [BsonElement("interests")]
    [JsonPropertyName("interests")]
    public List<string> Interests { get; set; } = new();

}