using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace Domain
{
    public class School
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [Required]
        public string Id { get; set; } = null!;

        [BsonElement("courses")]
        public ObjectId[] Courses { get; set; } = null!;

        [BsonElement("description")]
        public string Description { get; set; }=null!;

        [BsonElement("image_link")]
        public string Image_link { get; set; } = null!;

        [BsonElement("name")]
        [JsonPropertyName(("name"))]
        public string Name { get; set; }=null!;
    }
}
