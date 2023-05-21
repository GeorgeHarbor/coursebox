using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [Required]
        public string Id { get; set; } = null!;

        [BsonElement("DOB")]
        public DateTime DOB { get; set; }

        [BsonElement("full_name")]
        public string Full_name { get; set; } = null!;

        [BsonElement("image_link")]
        public string Image_link { get; set; } = null!;

        [BsonElement("interests")]

        public string[] Interests { get; set; } = null!;

        [BsonElement("is_verified")]
        public bool Is_verified { get; set; }

        [BsonElement("join_date")]
        public DateTime Join_date { get; set; }

        [BsonElement("password")]
        public string Password { get; set; } = null!;

        [BsonElement("role")]
        public string Role { get; set; } = null!;

        [BsonElement("username")]
        public string Username { get; set; }= null!;

    }
}
