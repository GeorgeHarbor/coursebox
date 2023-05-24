using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentValidation;

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

        [BsonElement("email")]

        public string Email { get; set; } = null!;

    }
    public class UserValidator : AbstractValidator<User>
    {
        public UserValidator()
        {
            RuleFor(user => user.Id).NotNull();
            RuleFor(user => user.Interests).NotNull().WithMessage("Please enter at least one interest.");
            RuleFor(user => user.Is_verified).NotNull();
            RuleFor(user => user.Join_date).NotNull();
            RuleFor(user => user.Password).NotNull().WithMessage("Please enter a valid password.");
            RuleFor(user => user.Role).NotNull();
            RuleFor(user => user.Username).NotNull();
            RuleFor(user => user.Username).Length(0, 20).WithMessage("Please enter a valid username. Username must be under 20 characters.");
            RuleFor(user => user.Email).NotNull();
            RuleFor(user => user.Email).EmailAddress();
        }
    }

}
