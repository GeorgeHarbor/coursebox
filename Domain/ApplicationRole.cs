using AspNetCore.Identity.MongoDbCore.Models;
using MongoDbGenericRepository.Attributes;

namespace Domain;

[CollectionName("Roles")]
public class ApplicationRole: MongoIdentityRole<Guid>
{
    
}